const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');

// Verbindungszeichenfolge zu deiner MongoDB-Datenbank
const connectionString = 'mongodb+srv://Nedal:Nedal@cluster0.n5iao4w.mongodb.net/?retryWrites=true&w=majority';

// Dateipfad zur hochzuladenden Datei
const filePath = 'C:/Users/N/PhpstormProjects/Crash Kurs Termis/views/Gesamt_Vornamen.csv';


// Name, unter dem die Datei in der MongoDB gespeichert werden soll
const filenameInMongoDB = 'Gesamt_Vornamen.csv';

async function uploadFileToMongoDB() {
    const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('yourdatabase2');
        const bucket = new GridFSBucket(db);

        const uploadStream = bucket.openUploadStream(filenameInMongoDB);
        const fileStream = fs.createReadStream(filePath);

        fileStream.pipe(uploadStream);

        uploadStream.on('finish', () => {
            console.log('File uploaded successfully.');
            client.close();
        });
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

uploadFileToMongoDB();
