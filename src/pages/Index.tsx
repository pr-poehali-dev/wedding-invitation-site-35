import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [rsvpData, setRsvpData] = useState({
    name: '',
    attendance: '',
    guests: '',
    dietary: '',
    alcohol: '',
    comments: ''
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-20T14:30:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleRSVPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваш ответ! Мы свяжемся с вами для уточнения деталей.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl to-cream font-open">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="w-20 h-20 bg-rose/30 rounded-full absolute top-20 left-10 animate-float"></div>
          <div className="w-12 h-12 bg-champagne/30 rounded-full absolute top-40 right-20 animate-pearl-shimmer"></div>
          <div className="w-16 h-16 bg-rose/20 rounded-full absolute bottom-32 left-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="w-8 h-8 bg-champagne/40 rounded-full absolute bottom-20 right-16 animate-pearl-shimmer" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose mr-4"></div>
              <Icon name="Heart" className="text-rose text-2xl animate-pearl-shimmer" />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose ml-4"></div>
            </div>
            
            <h1 className="font-cormorant text-6xl md:text-8xl font-light text-foreground mb-4 tracking-wide">
              Борис
              <span className="block text-4xl md:text-5xl text-muted-foreground my-2">&</span>
              Елизавета
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-champagne mr-6"></div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                20 сентября 2025
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-champagne ml-6"></div>
            </div>
          </div>

          {/* Countdown Timer */}
          <Card className="bg-white/50 backdrop-blur-sm border-rose/20 shadow-lg">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 font-cormorant text-lg">До нашего торжества осталось</p>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.days}</div>
                  <div className="text-sm text-muted-foreground">дней</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.hours}</div>
                  <div className="text-sm text-muted-foreground">часов</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.minutes}</div>
                  <div className="text-sm text-muted-foreground">минут</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.seconds}</div>
                  <div className="text-sm text-muted-foreground">секунд</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4">
              Детали торжества
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="text-rose text-2xl mb-4 mx-auto" />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Время</h3>
                <p className="text-muted-foreground">Начало: 14:30</p>
                <p className="text-muted-foreground">Окончание: 22:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" className="text-rose text-2xl mb-4 mx-auto" />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Место</h3>
                <p className="text-muted-foreground">ул. 50 лет Октября, 4/3</p>
                <p className="text-muted-foreground">Ростов</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" className="text-rose text-2xl mb-4 mx-auto" />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Программа</h3>
                <p className="text-muted-foreground text-sm">Торжественная церемония</p>
                <p className="text-muted-foreground text-sm">Банкет и танцы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4">
              Дресс-код
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6 text-center">
                <Icon name="Palette" className="inline mr-2 text-rose" />
                Цветовая палитра
              </h3>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Бежевый</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Персиковый</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Пудровый</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Голубой</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Лавандовый</p>
                </div>
              </div>
              <p className="text-muted-foreground text-center">
                Мы просим вас выбрать наряды в светлых, нежных тонах
              </p>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6 text-center">
                <Icon name="Sparkles" className="inline mr-2 text-rose" />
                Для девушек
              </h3>
              <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name="Circle" className="text-champagne mr-3 text-sm" />
                    <span className="text-muted-foreground">Жемчужные серьги</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Icon name="Circle" className="text-champagne mr-3 text-sm" />
                    <span className="text-muted-foreground">Жемчужное колье</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Circle" className="text-champagne mr-3 text-sm" />
                    <span className="text-muted-foreground">Жемчужные браслеты</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4">
              Пожелания по подаркам
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto"></div>
          </div>

          <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <Icon name="Gift" className="text-rose text-3xl mb-6 mx-auto" />
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Ваше присутствие — лучший подарок для нас! Но если вы хотите порадовать нас, 
                будем благодарны за денежный вклад в наше будущее.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4">
              Подтверждение присутствия
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto"></div>
          </div>

          <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleRSVPSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Ваше имя</Label>
                  <Input
                    id="name"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label className="text-foreground font-medium">Сможете ли вы присутствовать?</Label>
                  <RadioGroup 
                    value={rsvpData.attendance} 
                    onValueChange={(value) => setRsvpData({...rsvpData, attendance: value})}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Да, с удовольствием приду</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">К сожалению, не смогу</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-foreground font-medium">Количество гостей (включая вас)</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={rsvpData.guests}
                    onChange={(e) => setRsvpData({...rsvpData, guests: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-foreground font-medium">Предпочтения по алкоголю</Label>
                  <RadioGroup 
                    value={rsvpData.alcohol} 
                    onValueChange={(value) => setRsvpData({...rsvpData, alcohol: value})}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wine" id="wine" />
                      <Label htmlFor="wine">Вино</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="champagne" id="champagne" />
                      <Label htmlFor="champagne">Шампанское</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cocktails" id="cocktails" />
                      <Label htmlFor="cocktails">Коктейли</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">Безалкогольные напитки</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="dietary" className="text-foreground font-medium">Особые пожелания по питанию</Label>
                  <Textarea
                    id="dietary"
                    value={rsvpData.dietary}
                    onChange={(e) => setRsvpData({...rsvpData, dietary: e.target.value})}
                    placeholder="Вегетарианство, аллергии, другие особенности..."
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="comments" className="text-foreground font-medium">Дополнительные комментарии</Label>
                  <Textarea
                    id="comments"
                    value={rsvpData.comments}
                    onChange={(e) => setRsvpData({...rsvpData, comments: e.target.value})}
                    placeholder="Ваши пожелания, вопросы или комментарии..."
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-rose hover:bg-rose/90 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4">
              Как добраться
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-4">Адрес</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Icon name="MapPin" className="text-rose mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">ул. 50 лет Октября, 4/3</p>
                      <p className="text-muted-foreground">Ростов</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start">
                    <Icon name="Car" className="text-rose mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Парковка</p>
                      <p className="text-muted-foreground text-sm">Доступна бесплатная парковка для гостей</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Bus" className="text-rose mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Общественный транспорт</p>
                      <p className="text-muted-foreground text-sm">Автобусы №15, 32 до остановки "50 лет Октября"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-4">Карта</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Icon name="MapPin" className="text-2xl mb-2 mx-auto text-rose" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm">будет добавлена позже</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 text-center bg-white/50">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose mr-4"></div>
            <Icon name="Heart" className="text-rose text-xl animate-pearl-shimmer" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose ml-4"></div>
          </div>
          
          <p className="font-cormorant text-2xl font-light text-foreground mb-4">
            Борис & Елизавета
          </p>
          <p className="text-muted-foreground">
            С любовью ждём встречи с вами 20 сентября 2025 года
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-rose rounded-full animate-pearl-shimmer"></div>
            <div className="w-2 h-2 bg-champagne rounded-full animate-pearl-shimmer" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-rose rounded-full animate-pearl-shimmer" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;