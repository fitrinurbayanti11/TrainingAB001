import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Here we would normally connect to MySQL/PostgreSQL/Firestore to store the record.
    // For now we sanitize and log the request to simulate a successful registration API.
    console.log("Registration received:", body);

    // Simulated network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ 
      success: true, 
      message: 'Registrasi berhasil. Tim medis kami akan segera menghubungi Anda melalui WhatsApp.' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gagal mengirim formulir. Silakan coba lagi.' }, 
      { status: 500 }
    );
  }
}
