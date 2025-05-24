import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
            АГЕНСТВО XXX
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Основной контент */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Добро пожаловать в систему
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Для просмотра обучающего видео отсканируйте QR-код ниже с помощью
              вашего мобильного устройства.
            </p>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://youtube.com/watch?v=dQw4w9WgXcQ"
                  alt="QR код для видео"
                  className="w-48 h-48"
                />
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>📱 Наведите камеру телефона на QR-код</p>
              <p>🎥 Видео откроется автоматически</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-blue-200 text-sm">
            © 2025 АГЕНСТВО XXX. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
