import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Disable body parsing for this API route
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handle file upload
const parseForm = (req: NextApiRequest) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads'); // Change to your preferred directory
  form.keepExtensions = true; // Keep the file extensions
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { files } = await parseForm(req);
    const file = files.file as formidable.File; // Access the uploaded file

    // Define where to save the file
    const oldPath = file.filepath;
    const newPath = path.join(process.cwd(), '/public/uploads', file.originalFilename || 'uploaded_image.jpg');
    fs.renameSync(oldPath, newPath); // Move the file to the uploads directory

    // Return the URL of the saved file
    const fileUrl = `/uploads/${file.originalFilename || 'uploaded_image.jpg'}`;
    return res.status(200).json({ url: fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ message: 'Error uploading file' });
  }
}

