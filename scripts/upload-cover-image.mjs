// Upload cover image to Sanity and link to blog post
const TOKEN = process.env.SANITY_API_TOKEN
const PROJECT_ID = 'lrd4dy39'

async function uploadAndLink() {
  // Step 1: Download image
  console.log('Downloading image...')
  const imgUrl = 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.55.12_amqj6v.jpg'
  const imgResp = await fetch(imgUrl)
  const imgBuffer = await imgResp.arrayBuffer()
  console.log('Image downloaded:', imgBuffer.byteLength, 'bytes')

  // Step 2: Upload to Sanity
  console.log('Uploading to Sanity...')
  const uploadResp = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/assets/images/production`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'image/jpeg',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: Buffer.from(imgBuffer),
    }
  )
  const uploadResult = await uploadResp.json()

  if (!uploadResult.document) {
    console.error('Upload failed:', JSON.stringify(uploadResult, null, 2))
    return
  }

  const assetId = uploadResult.document._id
  console.log('Image uploaded, asset ID:', assetId)

  // Step 3: Patch the blog post with the image
  console.log('Linking image to blog post...')
  const patchResp = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/production`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [
          {
            patch: {
              query: '*[_type=="blogPost" && slug.current=="verven-na-behang"]',
              set: {
                coverImage: {
                  _type: 'image',
                  asset: {
                    _type: 'reference',
                    _ref: assetId,
                  },
                },
              },
            },
          },
        ],
      }),
    }
  )
  const patchResult = await patchResp.json()
  console.log('Blog post updated:', JSON.stringify(patchResult, null, 2))
}

uploadAndLink()
