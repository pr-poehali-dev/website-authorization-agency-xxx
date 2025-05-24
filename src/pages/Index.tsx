import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Проверка авторизации
    if (login === "ALEX" && password === "12390") {
      window.location.href = "/video";
    } else {
      alert("Неверный логин или пароль!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="w-full max-w-md">
        {/* Заголовок агентства */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
            АГЕНСТВО XXX
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Форма авторизации */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Вход в систему
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="login"
                  className="text-sm font-medium text-gray-700"
                >
                  Логин
                </Label>
                <Input
                  id="login"
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Введите ваш логин"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Введите ваш пароль"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              >
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Дополнительная информация */}
        <div className="text-center mt-6">
          <p className="text-blue-200 text-sm">
            © 2025 АГЕНСТВО XXX. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
