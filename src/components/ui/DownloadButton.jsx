import { useState } from 'react';

export const DownloadButton = ({ filename = 'kit.pdf' }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(`/${filename}?t=${Date.now()}`);
      if (!response.ok) throw new Error('Failed to download PDF');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error al descargar PDF: ' + error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="px-6 py-3 bg-white text-[#DDA0DD] border-4 border-dashed border-[#DDA0DD] rounded-full font-semibold hover:bg-[#DDA0DD] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_#DDA0DD] hover:shadow-[6px_6px_0px_#DDA0DD] transform hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none"
      style={{
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '700',
        transition: 'all 0.15s',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      {isDownloading ? 'Descargando...' : '📥 Descargar tarjeta'}
    </button>
  );
};
