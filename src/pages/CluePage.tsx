import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CluePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
            АГЕНСТВО XXX
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Основной контент */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              🎯 Следующая подсказка
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Отлично! Вы справились с первым заданием.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-lg text-purple-800 font-medium">
                Ищите следующую подсказку...
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-purple-200 text-sm">
            © 2025 АГЕНСТВО XXX. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CluePage;
