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
      <section className="relative min-h-screen flex items-center justify-center text-center px-4" style={{backgroundImage: 'url(/img/2c1a9d42-c85c-4f1e-af45-53978ce1d70e.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'}}>
        {/* Pearl and Flower Decorations */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          {/* Floating Pearls */}
          <div className="w-6 h-6 bg-white/80 rounded-full absolute top-20 left-10 animate-float shadow-lg" style={{boxShadow: '0 0 20px rgba(255,255,255,0.8)'}}></div>
          <div className="w-4 h-4 bg-white/70 rounded-full absolute top-40 right-20 animate-pearl-shimmer" style={{boxShadow: '0 0 15px rgba(255,255,255,0.6)'}}></div>
          <div className="w-8 h-8 bg-white/90 rounded-full absolute bottom-32 left-20 animate-float" style={{animationDelay: '1s', boxShadow: '0 0 25px rgba(255,255,255,0.9)'}}></div>
          <div className="w-3 h-3 bg-white/60 rounded-full absolute bottom-20 right-16 animate-pearl-shimmer" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Pearls */}
          <div className="w-5 h-5 bg-white/75 rounded-full absolute top-60 left-1/4 animate-float" style={{animationDelay: '0.5s', boxShadow: '0 0 18px rgba(255,255,255,0.7)'}}></div>
          <div className="w-7 h-7 bg-white/85 rounded-full absolute top-80 right-1/3 animate-pearl-shimmer" style={{animationDelay: '1.5s', boxShadow: '0 0 22px rgba(255,255,255,0.8)'}}></div>
          
          {/* Flower Elements */}
          <div className="absolute top-16 right-10 text-pink-300 text-2xl animate-flower-bloom" style={{animationDelay: '2s'}}>🌸</div>
          <div className="absolute bottom-40 left-16 text-rose-300 text-xl animate-flower-bloom" style={{animationDelay: '3s'}}>🌹</div>
          <div className="absolute top-1/3 left-8 text-purple-300 text-lg animate-flower-bloom" style={{animationDelay: '4s'}}>💐</div>
          <div className="absolute bottom-16 right-8 text-pink-400 text-2xl animate-flower-bloom" style={{animationDelay: '2.5s'}}>🌺</div>
          <div className="absolute top-2/3 right-1/4 text-yellow-300 text-lg animate-flower-bloom" style={{animationDelay: '3.5s'}}>🌼</div>
          <div className="absolute bottom-1/3 left-1/3 text-red-300 text-xl animate-flower-bloom" style={{animationDelay: '4.5s'}}>🌷</div>
          
          {/* Pearl Strings */}
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-white/60 to-transparent animate-fade-in" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-0 right-1/3 w-px h-40 bg-gradient-to-b from-white/40 to-transparent animate-fade-in" style={{animationDelay: '3.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6 animate-fade-in">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose mr-4"></div>
              <Icon name="Heart" className="text-rose text-2xl animate-pearl-shimmer" />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose ml-4"></div>
            </div>
            
            <h1 className="font-cormorant text-6xl md:text-8xl font-light text-foreground mb-4 tracking-wide">
              <span className="inline-block animate-slide-in-left">Борис</span>
              <span className="block text-4xl md:text-5xl text-muted-foreground my-2 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>&</span>
              <span className="inline-block animate-slide-in-right" style={{animationDelay: '0.3s'}}>Елизавета</span>
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-champagne mr-6"></div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in" style={{animationDelay: '1s'}}>
                20 сентября 2025
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-champagne ml-6"></div>
            </div>
          </div>

          {/* Countdown Timer */}
          <Card className="bg-white/50 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in" style={{animationDelay: '1.5s'}}>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 font-cormorant text-lg animate-fade-in" style={{animationDelay: '2s'}}>До нашего торжества осталось</p>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="animate-bounce-gentle" style={{animationDelay: '2.2s'}}>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.days}</div>
                  <div className="text-sm text-muted-foreground">дней</div>
                </div>
                <div className="animate-bounce-gentle" style={{animationDelay: '2.4s'}}>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.hours}</div>
                  <div className="text-sm text-muted-foreground">часов</div>
                </div>
                <div className="animate-bounce-gentle" style={{animationDelay: '2.6s'}}>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.minutes}</div>
                  <div className="text-sm text-muted-foreground">минут</div>
                </div>
                <div className="animate-bounce-gentle" style={{animationDelay: '2.8s'}}>
                  <div className="text-3xl md:text-4xl font-cormorant font-semibold text-foreground">{timeLeft.seconds}</div>
                  <div className="text-sm text-muted-foreground">секунд</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-4 h-4 bg-rose/40 rounded-full absolute top-10 left-16 animate-pearl-shimmer"></div>
          <div className="w-6 h-6 bg-white/60 rounded-full absolute top-32 right-20 animate-float"></div>
          <div className="absolute top-20 left-1/4 text-pink-200 text-lg animate-flower-bloom" style={{animationDelay: '1s'}}>🌸</div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4 animate-slide-in-left">
              Детали торжества
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="text-rose text-2xl mb-4 mx-auto animate-bounce-gentle" />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Время</h3>
                <p className="text-muted-foreground">Начало: 14:30</p>
                <p className="text-muted-foreground">Окончание: 22:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in hover:scale-105 transition-transform" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" className="text-rose text-2xl mb-4 mx-auto animate-bounce-gentle" style={{animationDelay: '0.5s'}} />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Место</h3>
                <p className="text-muted-foreground">ул. 50 лет Октября, 4/3</p>
                <p className="text-muted-foreground">Ростов</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in hover:scale-105 transition-transform" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" className="text-rose text-2xl mb-4 mx-auto animate-bounce-gentle" style={{animationDelay: '1s'}} />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Программа</h3>
                <p className="text-muted-foreground text-sm">Торжественная церемония</p>
                <p className="text-muted-foreground text-sm">Банкет и танцы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 px-4 bg-white/30 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-15" style={{backgroundImage: 'url(/img/cb9965d6-972c-4bab-b84c-e93528263d55.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4 animate-slide-in-right">
              Дресс-код
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6 text-center animate-slide-in-left">
                <Icon name="Palette" className="inline mr-2 text-rose" />
                Цветовая палитра
              </h3>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <div className="text-center animate-flower-bloom" style={{animationDelay: '1s'}}>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Бежевый</p>
                </div>
                <div className="text-center animate-flower-bloom" style={{animationDelay: '1.2s'}}>
                  <div className="w-12 h-12 bg-orange-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Персиковый</p>
                </div>
                <div className="text-center animate-flower-bloom" style={{animationDelay: '1.4s'}}>
                  <div className="w-12 h-12 bg-pink-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Пудровый</p>
                </div>
                <div className="text-center animate-flower-bloom" style={{animationDelay: '1.6s'}}>
                  <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Голубой</p>
                </div>
                <div className="text-center animate-flower-bloom" style={{animationDelay: '1.8s'}}>
                  <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto mb-2 border-2 border-white shadow-md"></div>
                  <p className="text-sm text-muted-foreground">Лавандовый</p>
                </div>
              </div>
              <p className="text-muted-foreground text-center animate-fade-in" style={{animationDelay: '2s'}}>
                Мы просим вас выбрать наряды в светлых, нежных тонах
              </p>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6 text-center animate-slide-in-right">
                <Icon name="Sparkles" className="inline mr-2 text-rose" />
                Для девушек
              </h3>
              <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 animate-slide-in-left" style={{animationDelay: '2.2s'}}>
                    <Icon name="Circle" className="text-champagne mr-3 text-sm animate-pearl-shimmer" />
                    <span className="text-muted-foreground">Жемчужные серьги</span>
                  </div>
                  <div className="flex items-center mb-4 animate-slide-in-left" style={{animationDelay: '2.4s'}}>
                    <Icon name="Circle" className="text-champagne mr-3 text-sm animate-pearl-shimmer" style={{animationDelay: '0.5s'}} />
                    <span className="text-muted-foreground">Жемчужное колье</span>
                  </div>
                  <div className="flex items-center animate-slide-in-left" style={{animationDelay: '2.6s'}}>
                    <Icon name="Circle" className="text-champagne mr-3 text-sm animate-pearl-shimmer" style={{animationDelay: '1s'}} />
                    <span className="text-muted-foreground">Жемчужные браслеты</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-20 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 text-yellow-300 text-xl animate-flower-bloom" style={{animationDelay: '1s'}}>💎</div>
          <div className="absolute bottom-20 left-20 text-pink-300 text-lg animate-flower-bloom" style={{animationDelay: '2s'}}>💝</div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4 animate-slide-in-left">
              Пожелания по подаркам
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}></div>
          </div>

          <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
            <CardContent className="p-8">
              <Icon name="Gift" className="text-rose text-3xl mb-6 mx-auto animate-bounce-gentle" />
              <p className="text-lg text-muted-foreground leading-relaxed font-light animate-fade-in" style={{animationDelay: '1s'}}>
                Ваше присутствие — лучший подарок для нас! Но если вы хотите порадовать нас, 
                будем благодарны за денежный вклад в наше будущее.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-4 bg-white/30 relative">
        {/* Pearl decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-5 h-5 bg-white/70 rounded-full absolute top-10 left-10 animate-float" style={{boxShadow: '0 0 15px rgba(255,255,255,0.7)'}}></div>
          <div className="w-3 h-3 bg-white/60 rounded-full absolute bottom-16 right-20 animate-pearl-shimmer"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4 animate-slide-in-right">
              Подтверждение присутствия
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}></div>
          </div>

          <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
            <CardContent className="p-8">
              <form onSubmit={handleRSVPSubmit} className="space-y-6">
                <div className="animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                  <Label htmlFor="name" className="text-foreground font-medium">Ваше имя</Label>
                  <Input
                    id="name"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                    className="mt-2"
                    required
                  />
                </div>

                <div className="animate-slide-in-right" style={{animationDelay: '1s'}}>
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

                <div className="animate-slide-in-left" style={{animationDelay: '1.2s'}}>
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

                <div className="animate-slide-in-right" style={{animationDelay: '1.4s'}}>
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

                <div className="animate-slide-in-left" style={{animationDelay: '1.6s'}}>
                  <Label htmlFor="dietary" className="text-foreground font-medium">Особые пожелания по питанию</Label>
                  <Textarea
                    id="dietary"
                    value={rsvpData.dietary}
                    onChange={(e) => setRsvpData({...rsvpData, dietary: e.target.value})}
                    placeholder="Вегетарианство, аллергии, другие особенности..."
                    className="mt-2"
                  />
                </div>

                <div className="animate-slide-in-right" style={{animationDelay: '1.8s'}}>
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
                  className="w-full bg-rose hover:bg-rose/90 text-white font-medium py-3 rounded-lg transition-colors animate-bounce-gentle hover:scale-105"
                  style={{animationDelay: '2s'}}
                >
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-16 text-blue-300 text-lg animate-flower-bloom" style={{animationDelay: '1s'}}>🗺️</div>
          <div className="absolute bottom-32 right-20 text-green-300 text-xl animate-flower-bloom" style={{animationDelay: '2s'}}>🚗</div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4 animate-slide-in-left">
              Как добраться
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-slide-in-left">
              <CardContent className="p-6">
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-4">Адрес</h3>
                <div className="space-y-3">
                  <div className="flex items-start animate-fade-in" style={{animationDelay: '1s'}}>
                    <Icon name="MapPin" className="text-rose mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">ул. 50 лет Октября, 4/3</p>
                      <p className="text-muted-foreground">Ростов</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <Icon name="Car" className="text-rose mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Парковка</p>
                      <p className="text-muted-foreground text-sm">Доступна бесплатная парковка для гостей</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-in" style={{animationDelay: '1.4s'}}>
                    <Icon name="Bus" className="text-rose mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Общественный транспорт</p>
                      <p className="text-muted-foreground text-sm">Автобусы №15, 32 до остановки "50 лет Октября"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-slide-in-right">
              <CardContent className="p-6">
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-4">Карта</h3>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A47.23135670745602%2C39.72083649999998%2C16%2Cru_RU&amp;source=constructor" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className="rounded-lg"
                    title="Карта местоположения свадьбы"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 text-center bg-white/50 relative">
        {/* Decorative pearls */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-4 h-4 bg-white/70 rounded-full absolute top-8 left-1/4 animate-pearl-shimmer" style={{boxShadow: '0 0 15px rgba(255,255,255,0.7)'}}></div>
          <div className="w-6 h-6 bg-white/80 rounded-full absolute bottom-8 right-1/4 animate-float" style={{boxShadow: '0 0 20px rgba(255,255,255,0.8)'}}></div>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose mr-4"></div>
            <Icon name="Heart" className="text-rose text-xl animate-pearl-shimmer" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose ml-4"></div>
          </div>
          
          <p className="font-cormorant text-2xl font-light text-foreground mb-4 animate-slide-in-left">
            Борис & Елизавета
          </p>
          <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '0.5s'}}>
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