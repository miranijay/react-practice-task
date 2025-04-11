import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import './style.css';

const QrCodeGenerator = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQr = () => {
        setQrCode(input);
        setInput('');
    }

  return (
    <div className='qr-code-container'>
        <h1>QR Code Generator</h1>
        <div>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                name='qr-code' 
                placeholder='Enter your value'
            />
            <button 
                disabled={ input && input.trim() !== '' ? false : true}
                onClick={handleGenerateQr}>Generate QR Code</button>
        </div>
        <div>
            <QRCode
                id='qr-code-value'
                value={qrCode}
                size={400}
                bgColor='#fff'
            />
        </div>
    </div>
  )
}

export default QrCodeGenerator;