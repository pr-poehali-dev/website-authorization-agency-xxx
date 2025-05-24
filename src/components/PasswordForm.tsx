import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordForm = () => {
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "7") {
      navigate("/clue");
    } else {
      setError("Неверный код");
      setPassword("");
    }
  };

  if (!showInput) {
    return (
      <div className="text-center">
        <Button
          onClick={() => setShowInput(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
        >
          Нашел код
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xs mx-auto">
      <div>
        <Label htmlFor="password" className="text-gray-700">
          Введите код:
        </Label>
        <Input
          id="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="text-center text-2xl"
          maxLength={1}
          autoFocus
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Проверить
      </Button>
    </form>
  );
};

export default PasswordForm;
