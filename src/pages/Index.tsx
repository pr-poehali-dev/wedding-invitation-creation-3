import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-beige via-wedding-white to-wedding-lilac flex items-center justify-center p-4">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-wedding-pink/10 rounded-full animate-gentle-float"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 bg-wedding-yellow/15 rounded-full animate-gentle-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-wedding-blue/10 rounded-full animate-gentle-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-12 h-12 bg-wedding-olive/15 rounded-full animate-gentle-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Декоративное изображение */}
        <div className="absolute top-4 right-4 opacity-20">
          <img
            src="/img/9dc1df22-9c55-4f1f-9b91-3a7985acbe9c.jpg"
            alt="Свадебные кольца"
            className="w-32 h-32 object-cover rounded-full animate-gentle-float"
            style={{ animationDelay: "3s" }}
          />
        </div>
        <div className="absolute bottom-4 left-4 opacity-15">
          <img
            src="/img/9dc1df22-9c55-4f1f-9b91-3a7985acbe9c.jpg"
            alt="Свадебные элементы"
            className="w-28 h-28 object-cover rounded-full animate-gentle-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      <Card className="max-w-2xl w-full mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
        <CardContent className="p-12">
          {/* Заголовок */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Heart" className="text-wedding-pink w-8 h-8" />
              <h1 className="font-cormorant text-5xl font-bold text-wedding-charcoal">
                Лиза & Егор
              </h1>
              <Icon name="Heart" className="text-wedding-pink w-8 h-8" />
            </div>
            <p className="font-montserrat text-xl text-wedding-gray mb-8">
              Приглашаем вас разделить с нами самый важный день в нашей жизни
            </p>
          </div>

          <Separator className="mb-10" />

          {/* События */}
          <div className="space-y-8 mb-10">
            {/* Роспись */}
            <div
              className="bg-wedding-beige/30 rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  name="CalendarDays"
                  className="text-wedding-charcoal w-6 h-6"
                />
                <h3 className="font-montserrat text-2xl font-semibold text-wedding-charcoal">
                  Церемония в ЗАГСе
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-wedding-gray">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" className="w-5 h-5" />
                  <span className="font-montserrat">25 августа 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="w-5 h-5" />
                  <span className="font-montserrat">14:30</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <Icon name="MapPin" className="w-5 h-5" />
                  <span className="font-montserrat">Дом Дружбы Народов</span>
                </div>
              </div>
            </div>

            {/* Банкет */}
            <div
              className="bg-wedding-yellow/20 rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  name="PartyPopper"
                  className="text-wedding-charcoal w-6 h-6"
                />
                <h3 className="font-montserrat text-2xl font-semibold text-wedding-charcoal">
                  Праздничный ужин
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-wedding-gray">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" className="w-5 h-5" />
                  <span className="font-montserrat">27 августа 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="w-5 h-5" />
                  <span className="font-montserrat">17:00</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <Icon name="MapPin" className="w-5 h-5" />
                  <span className="font-montserrat">Holiday Park</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="mb-10" />

          {/* Особые просьбы */}
          <div className="space-y-6 mb-10">
            {/* Подарки */}
            <div
              className="bg-wedding-blue/15 rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Plane" className="text-wedding-charcoal w-6 h-6" />
                <h4 className="font-montserrat text-lg font-semibold text-wedding-charcoal">
                  Наш медовый месяц
                </h4>
              </div>
              <p className="font-montserrat text-wedding-gray leading-relaxed">
                Вместо традиционных подарков мы будем благодарны за денежные
                подарки — мы копим на незабываемое свадебное путешествие!
              </p>
            </div>

            {/* Вино */}
            <div
              className="bg-wedding-olive/15 rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Wine" className="text-wedding-charcoal w-6 h-6" />
                <h4 className="font-montserrat text-lg font-semibold text-wedding-charcoal">
                  Семейный винный бар
                </h4>
              </div>
              <p className="font-montserrat text-wedding-gray leading-relaxed">
                Цветы прекрасны, но быстро увядают. Если хотите порадовать нас —
                принесите бутылку хорошего вина для нашего будущего семейного
                винного бара!
              </p>
            </div>
          </div>

          <Separator className="mb-10" />

          {/* Дресс-код */}
          <div
            className="bg-gradient-to-r from-wedding-pink/10 via-wedding-yellow/10 to-wedding-lilac/10 rounded-lg p-6 mb-10 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Palette" className="text-wedding-charcoal w-6 h-6" />
              <h4 className="font-montserrat text-lg font-semibold text-wedding-charcoal">
                Дресс-код: Нежные оттенки лета
              </h4>
            </div>
            <p className="font-montserrat text-wedding-gray mb-4">
              Просим вас выбрать наряды в следующих цветах:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Розовый", color: "bg-wedding-pink" },
                { name: "Жёлтый", color: "bg-wedding-yellow" },
                { name: "Сиреневый", color: "bg-wedding-lilac" },
                { name: "Оливковый", color: "bg-wedding-olive" },
                { name: "Голубой", color: "bg-wedding-blue" },
                { name: "Бежевый", color: "bg-wedding-beige" },
              ].map((colorItem, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full ${colorItem.color} border-2 border-wedding-gray/20`}
                  ></div>
                  <span className="font-montserrat text-sm text-wedding-gray">
                    {colorItem.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Подтверждение */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="font-montserrat text-wedding-gray mb-6">
              Пожалуйста, подтвердите ваше присутствие
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setIsConfirming(true)}
                className="bg-wedding-olive hover:bg-wedding-olive/80 text-white font-montserrat px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Icon name="Check" className="w-5 h-5 mr-2" />
                Буду присутствовать
              </Button>
              <Button
                variant="outline"
                className="border-wedding-gray text-wedding-gray hover:bg-wedding-gray/10 font-montserrat px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Связаться с нами
              </Button>
            </div>
            {isConfirming && (
              <p className="font-montserrat text-wedding-olive mt-4 animate-fade-in">
                Спасибо! Мы с нетерпением ждём встречи с вами! 💕
              </p>
            )}
          </div>

          {/* Подпись */}
          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "1.4s" }}
          >
            <p className="font-cormorant text-2xl text-wedding-charcoal italic">
              С любовью,
            </p>
            <p className="font-cormorant text-3xl text-wedding-charcoal font-semibold">
              Лиза и Егор ♡
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
