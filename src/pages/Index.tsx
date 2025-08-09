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
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
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

  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    try {
      const response = await fetch('https://formspree.io/f/xqalwaky', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Спасибо за ваш ответ! Мы получили вашу заявку и свяжемся с вами для уточнения деталей.');
        setRsvpData({
          name: '',
          attendance: '',
          guests: '',
          dietary: '',
          alcohol: '',
          comments: ''
        });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    }
  };

  if (!isInvitationOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pearl to-cream font-open relative overflow-hidden" style={{backgroundImage: 'url(/img/2c1a9d42-c85c-4f1e-af45-53978ce1d70e.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'}}>
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
        
        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-lg mx-auto">
            {/* Announcement */}
            <div className="mb-12 animate-fade-in">
              {/* Elegant backdrop for text */}
              <div className="bg-white/70 backdrop-blur-md rounded-3xl px-12 py-8 shadow-xl border border-white/30 inline-block">
                <h1 className="font-cormorant text-4xl md:text-5xl font-light text-gray-700 mb-4 animate-slide-in-left tracking-wide">
                  Это официально:
                </h1>
                <h2 className="font-cormorant text-6xl md:text-7xl font-bold text-rose-600 mb-2 animate-slide-in-right tracking-wider" style={{animationDelay: '0.5s', textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
                  мы женимся!
                </h2>
                {/* Decorative line */}
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mt-4 animate-fade-in" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Envelope */}
            <div className="mb-12 animate-bounce-gentle" style={{animationDelay: '1s'}}>
              <Card className="bg-gradient-to-br from-white/80 to-cream/60 backdrop-blur-sm border-rose/30 shadow-2xl max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-12 text-center relative">
                  {/* Envelope Flap */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-rose/20 to-transparent rounded-t-lg border-b border-rose/20"></div>
                  
                  {/* Wax Seal */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-rose rounded-full flex items-center justify-center animate-pearl-shimmer">
                    <Icon name="Heart" className="text-white text-sm" />
                  </div>
                  
                  {/* Invitation Preview */}
                  <div className="mt-8">
                    <Icon name="Mail" className="text-rose text-4xl mb-4 mx-auto animate-bounce-gentle" />
                    <p className="font-cormorant text-xl text-muted-foreground mb-2">Свадебное приглашение</p>
                    <p className="text-sm text-muted-foreground">Борис & Елизавета</p>
                    <p className="text-sm text-muted-foreground">20 сентября 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Open Button */}
            <div className="animate-fade-in" style={{animationDelay: '2s'}}>
              <Button 
                onClick={() => setIsInvitationOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-cormorant text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Icon name="Heart" className="mr-2" />
                Открыть приглашение
                <Icon name="Heart" className="ml-2" />
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '2.5s'}}>
              <div className="w-3 h-3 bg-rose rounded-full animate-pearl-shimmer"></div>
              <div className="w-3 h-3 bg-champagne rounded-full animate-pearl-shimmer" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-rose rounded-full animate-pearl-shimmer" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl to-cream font-open animate-fade-in">
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
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Программа</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">14:15 - сбор гостей</p>
                  <p className="text-muted-foreground">15:00 - церемония</p>
                  <p className="text-muted-foreground">16:00 - банкет</p>
                  <p className="text-muted-foreground">22:00 - завершение</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in hover:scale-105 transition-transform" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" className="text-rose text-2xl mb-4 mx-auto animate-bounce-gentle" style={{animationDelay: '0.5s'}} />
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-3">Место</h3>
                <p className="font-medium text-foreground">Гостиный Двор</p>
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
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md animate-flower-bloom" style={{backgroundColor: '#75331D', animationDelay: '1s'}}></div>
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md animate-flower-bloom" style={{backgroundColor: '#A19874', animationDelay: '1.2s'}}></div>
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md animate-flower-bloom" style={{backgroundColor: '#966964', animationDelay: '1.4s'}}></div>
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md animate-flower-bloom" style={{backgroundColor: '#C2816B', animationDelay: '1.6s'}}></div>
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md animate-flower-bloom" style={{backgroundColor: '#D0AA95', animationDelay: '1.8s'}}></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div>
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6 text-center animate-slide-in-left">
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
              
              <div>
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6 text-center animate-slide-in-right">
                  <Icon name="ShirtIcon" className="inline mr-2 text-rose" fallback="Users" />
                  Для мужчин
                </h3>
                <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 animate-slide-in-right" style={{animationDelay: '2.2s'}}>
                      <Icon name="Circle" className="text-champagne mr-3 text-sm animate-pearl-shimmer" />
                      <span className="text-muted-foreground">Классические брюки</span>
                    </div>
                    <div className="flex items-center animate-slide-in-right" style={{animationDelay: '2.4s'}}>
                      <Icon name="Circle" className="text-champagne mr-3 text-sm animate-pearl-shimmer" style={{animationDelay: '0.5s'}} />
                      <span className="text-muted-foreground">Белая рубашка</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-20 px-4 bg-white/30 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-6 h-6 bg-rose/30 rounded-full absolute top-16 left-16 animate-float"></div>
          <div className="w-4 h-4 bg-champagne/40 rounded-full absolute bottom-20 right-20 animate-pearl-shimmer"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4">
              Наша история
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto"></div>
          </div>

          {/* Couple Photo */}
          <div className="mb-16">
            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="https://cdn.poehali.dev/files/1fcb49ed-a6e9-469a-82b2-8f21ca35dd8e.jpg" 
                    alt="Борис и Елизавета"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <p className="font-cormorant text-xl text-muted-foreground font-light">
                  Борис & Елизавета
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Venue Photos */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://cdn.poehali.dev/files/418a4432-2623-4a75-9b9f-aaa235700c41.png" 
                    alt="Гостиный двор - внешний вид"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-2 text-center">
                  Гостиный двор
                </h3>
                <p className="text-muted-foreground text-center text-sm">
                  Элегантный фасад нашего торжественного места
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://cdn.poehali.dev/files/d90fa3dc-afcd-4ae7-bfea-dd1cb3950039.png" 
                    alt="Зал Атриум"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-2 text-center">
                  Зал Атриум
                </h3>
                <p className="text-muted-foreground text-center text-sm">
                  Роскошный банкетный зал для нашего торжества
                </p>
              </CardContent>
            </Card>
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
                Самым главным подарком для нас будет ваше хорошее настроение на нашей свадьбе. 
                А чтобы руки были свободны для крепких объятий, будем рады легким подаркам в конвертах 
                и вашему творческому подходу к поздравлению.
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
            <p className="text-muted-foreground mt-6 text-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
              Просим подтвердить ваше присутствие до 31.08.2025
            </p>
          </div>

          <Card className="bg-white/60 backdrop-blur-sm border-rose/20 shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
            <CardContent className="p-8">
              <form onSubmit={handleRSVPSubmit} className="space-y-6">
                {/* Hidden fields for form submission */}
                <input type="hidden" name="attendance" value={rsvpData.attendance} />
                <input type="hidden" name="alcohol" value={rsvpData.alcohol} />
                <div className="animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                  <Label htmlFor="name" className="text-foreground font-medium">Ваше имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                    className="mt-2"
                    required
                  />
                </div>

                <div className="animate-slide-in-right" style={{animationDelay: '1s'}}>
                  <Label className="text-foreground font-medium">Сможете ли вы присутствовать?</Label>
                  <RadioGroup 
                    name="attendance"
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



                <div className="animate-slide-in-right" style={{animationDelay: '1.4s'}}>
                  <Label className="text-foreground font-medium">Предпочтения по алкоголю</Label>
                  <RadioGroup 
                    name="alcohol"
                    value={rsvpData.alcohol} 
                    onValueChange={(value) => setRsvpData({...rsvpData, alcohol: value})}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="white-wine" id="white-wine" />
                      <Label htmlFor="white-wine">Вино белое</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="red-wine" id="red-wine" />
                      <Label htmlFor="red-wine">Вино красное</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="champagne" id="champagne" />
                      <Label htmlFor="champagne">Шампанское</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vodka" id="vodka" />
                      <Label htmlFor="vodka">Водка</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whiskey" id="whiskey" />
                      <Label htmlFor="whiskey">Виски</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cognac" id="cognac" />
                      <Label htmlFor="cognac">Коньяк</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no-alcohol" id="no-alcohol" />
                      <Label htmlFor="no-alcohol">Я не пью алкоголь</Label>
                    </div>
                  </RadioGroup>
                </div>



                <div className="animate-slide-in-right" style={{animationDelay: '1.8s'}}>
                  <Label htmlFor="comments" className="text-foreground font-medium">Дополнительные комментарии</Label>
                  <Textarea
                    id="comments"
                    name="comments"
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
                      <p className="font-medium text-foreground">Гостиный двор</p>
                      <p className="text-muted-foreground">ул. 50 лет Октября, 4/3</p>
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

      {/* Host Contact Section */}
      <section className="py-20 px-4 bg-white/20 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-16 left-12 text-purple-300 text-xl animate-flower-bloom" style={{animationDelay: '1s'}}>🎤</div>
          <div className="absolute bottom-20 right-16 text-blue-300 text-lg animate-flower-bloom" style={{animationDelay: '2s'}}>✨</div>
          <div className="w-5 h-5 bg-white/60 rounded-full absolute top-32 right-20 animate-pearl-shimmer" style={{boxShadow: '0 0 18px rgba(255,255,255,0.6)'}}></div>
          <div className="w-3 h-3 bg-white/50 rounded-full absolute bottom-32 left-20 animate-float"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-4 animate-slide-in-left">
              Ведущий торжества
            </h2>
            <div className="w-24 h-0.5 bg-rose mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}></div>
          </div>

          <Card className="bg-white/70 backdrop-blur-sm border-rose/20 shadow-xl animate-fade-in max-w-2xl mx-auto" style={{animationDelay: '0.5s'}}>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Host Photo */}
                <div className="animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                  <div className="relative">
                    <img 
                      src="https://cdn.poehali.dev/files/3945ab62-749b-4896-9f54-c39f57e09ff3.png" 
                      alt="Ведущий торжества"
                      className="w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-white/50"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-champagne rounded-full animate-pearl-shimmer"></div>
                  </div>
                </div>

                {/* Host Info */}
                <div className="flex-1 text-center md:text-left animate-slide-in-right" style={{animationDelay: '1s'}}>
                  <h3 className="font-cormorant text-3xl font-semibold text-foreground mb-4">
                    Илья Урлис
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ведущий нашего торжества - Илья Урлис, если вы захотите преподнести нам творческий подарок или сделать сюрприз, можете обращаться к нему.
                  </p>
                  
                  {/* Contact Button */}
                  <div className="animate-bounce-gentle" style={{animationDelay: '1.3s'}}>
                    <a 
                      href="https://vk.com/urlis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Icon name="MessageCircle" className="mr-2" />
                      Связаться с Ильёй
                      <Icon name="ExternalLink" className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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