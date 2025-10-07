import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'stats', 'pro', 'download'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: 'Hash', text: 'Подбирайте видео по хештегам' },
    { icon: 'Search', text: 'Ищите любое видео через поиск' },
    { icon: 'BookOpen', text: 'Смотрите политику и переговоры' },
    { icon: 'Plane', text: 'Военные видео: дроны, артобстрелы' },
    { icon: 'Mountain', text: 'Путешествия и походы' },
    { icon: 'Radio', text: 'Прямые эфиры на любую тему' },
    { icon: 'Heart', text: 'Оставляйте реакции: сердечки или крестик' },
    { icon: 'MessageCircle', text: 'Пишите комментарии к видео' },
    { icon: 'Smile', text: 'Отвечайте и ставьте эмоции другим' },
    { icon: 'Crown', text: 'PRO: GIF аватары и спец эмоции' },
    { icon: 'Award', text: 'Пометка "ГОСУДАРСТВЕННЫЙ КАНАЛ"' },
  ];

  const regions = [
    { name: 'Недр. Империя', available: true },
    { name: 'Блэрний', available: true },
    { name: 'Галактическая Империя', available: true },
    { name: 'Герцеговиснк', available: true },
    { name: 'Кхмерэн', available: true, badge: 'с 1 января 2026' },
  ];

  const unavailableRegions = [
    'Свободная Республика Тартасия', 'Ягловинск', 'Йораджистан', 'Царан', 
    'Рожская Республика', 'Щранская Республика', 'Зурская Республика',
    'Беблэр', 'Граценвинск', 'Сламодия'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 animated-gradient -z-10" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="Play" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">DEEPTUBE</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'features', label: 'Features' },
                { id: 'stats', label: 'Statistics' },
                { id: 'pro', label: 'PRO' },
                { id: 'download', label: 'Download' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button variant="outline" className="border-white/20 hover:bg-white/10">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/30">
              Единая Видео-Платформа ❤️‍🔥
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              DEEPTUBE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Сервис для просмотра фильмов, сериалов, блогов, готовки
            </p>
            <p className="text-3xl md:text-4xl font-semibold mb-12 text-secondary">
              Встречайте самые экстремальные гонки в стране!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90">
                <Icon name="Download" size={24} className="mr-2" />
                Скачать приложение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-white/20 hover:bg-white/10">
                <Icon name="PlayCircle" size={24} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">О приложении</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Icon name="Info" size={32} className="text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">Информация</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p><span className="text-foreground font-medium">Тип:</span> Видео Платформа</p>
                    <p><span className="text-foreground font-medium">Разработчик:</span> Empire Government Company ICN</p>
                    <p><span className="text-foreground font-medium">Страна:</span> Недралическая Империя</p>
                    <p><span className="text-foreground font-medium">Дата выпуска:</span> 2005</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Icon name="Smartphone" size={32} className="text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">Платформы</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p><span className="text-foreground font-medium">Доступно в:</span> Нед. Империя, Блэрний</p>
                    <p><span className="text-foreground font-medium">ОС:</span> Nedra OS Mobile & PC</p>
                    <p><span className="text-foreground font-medium">Обновление:</span> 7 августа 2025</p>
                    <p className="text-sm">Небольшие исправления ошибок</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Функции</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-white/10 hover:scale-105 hover:bg-card/70 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/20 flex-shrink-0">
                        <Icon name={feature.icon as any} size={24} className="text-primary" />
                      </div>
                      <p className="text-base leading-relaxed pt-2">{feature.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Статистика</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-primary/30">
                <CardContent className="p-8 text-center">
                  <Icon name="Download" size={48} className="text-primary mx-auto mb-4" />
                  <div className="text-5xl font-black mb-2 text-primary">~1.9B</div>
                  <p className="text-lg text-muted-foreground">Скачиваний на телефоны</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border-secondary/30">
                <CardContent className="p-8 text-center">
                  <Icon name="Users" size={48} className="text-secondary-foreground mx-auto mb-4" />
                  <div className="text-5xl font-black mb-2 text-secondary-foreground">~3.98B</div>
                  <p className="text-lg text-muted-foreground">Ежемесячных посетителей</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Оценка</h3>
                      <p className="text-muted-foreground">Deep Apps (Аналог Play Market)</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" size={40} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-5xl font-bold">4.2</span>
                      <span className="text-2xl text-muted-foreground">/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="text-3xl font-semibold mb-6 text-center">Регионы доступности</h3>
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 mb-6">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="CheckCircle" size={24} className="text-green-500 mr-2" />
                      Доступно
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {regions.map((region, index) => (
                        <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-green-500/30 bg-green-500/10">
                          {region.name}
                          {region.badge && <span className="ml-2 text-xs opacity-70">({region.badge})</span>}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="XCircle" size={24} className="text-red-500 mr-2" />
                      Недоступно в ОСИ
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {unavailableRegions.map((region, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1.5 text-xs border-red-500/30 bg-red-500/10">
                          {region}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      Мы работаем над тем, чтобы любая страна из ОСИ смогла пользоваться нашим сайтом
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="pro" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-4xl animate-fade-in">
            <div className="text-center mb-12">
              <Badge className="mb-6 text-lg px-6 py-3 bg-gradient-to-r from-primary to-secondary border-0">
                <Icon name="Crown" size={20} className="mr-2" />
                PRO подписка
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">DeepTube PRO</h2>
              <p className="text-xl text-muted-foreground">Добавлена 1 января 2025</p>
            </div>

            <Card className="bg-gradient-to-br from-primary/30 via-card/50 to-secondary/30 backdrop-blur-sm border-white/20">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-black mb-2">2.5 Ника</div>
                  <div className="text-2xl text-muted-foreground mb-4">~2,250₽ / месяц</div>
                  <Badge variant="outline" className="text-sm px-4 py-2 border-green-500/50 bg-green-500/20">
                    20 дней бесплатно
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg">GIF-анимация на аватар</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg">Специальные эмоции в комментариях</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg">5 неоновых эмодзи эксклюзивно для PRO</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg">Розовое солнце и розовый водяной пистолет</p>
                  </div>
                </div>

                <Button size="lg" className="w-full mt-8 text-lg py-6 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Sparkles" size={24} className="mr-2" />
                  Попробовать PRO бесплатно
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="download" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-3xl text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Скачать DeepTube</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Доступно на Nedra OS для мобильных устройств и ПК
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-8">
                  <Icon name="Smartphone" size={64} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Mobile</h3>
                  <p className="text-muted-foreground mb-4">Nedra OS Mobile</p>
                  <Button className="w-full rounded-xl">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-8">
                  <Icon name="Monitor" size={64} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Desktop</h3>
                  <p className="text-muted-foreground mb-4">Nedra OS PC</p>
                  <Button className="w-full rounded-xl">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-muted/20 border border-white/10">
              <p className="text-sm text-muted-foreground">
                Или посетите <span className="text-primary font-semibold">DeepTube.nedra</span> в браузере
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 backdrop-blur-sm bg-background/30 py-12 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="Play" size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">DEEPTUBE</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Empire Government Company ICN
            </p>
            <p className="text-sm text-muted-foreground">
              © 2005-2025 DeepTube. Недралическая Империя
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
