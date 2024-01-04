import { Card } from "@/components/Card";
import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { ShowCaseCards } from "@/components/ShowCaseCards";


export default function Home() {
  return (
    <main className="px-[150px]">
      <section>
        <HeroCarousel/>
      </section>
      <section>
        <h1 className="text-3xl font-bold flex justify-center p-8">Elegidos del mes</h1>
        <div>
          <ShowCaseCards>
            <div className="col-span-2 flex flex-col gap-6">
              <Card
                img="https://images.samsung.com/is/image/samsung/assets/ar/home-2023/elegidos-dic/ElegidosDelMes-Reyes_330x330-S21FE.png?$330_330_PNG$"
              />
              <Card
              img="https://images.samsung.com/is/image/samsung/assets/ar/home-2023/elegidos-dic/ElegidosDelMes-Reyes_330x330-Foldables.png?$330_330_PNG$"
              />
            </div>
            <div className="col-span-4">
              <Card
                img="https://images.samsung.com/is/image/samsung/assets/ar/tmp-w48/ElegidosDelMes-W48_TG-MO-Informaticacopia.png?$624_352_PNG$"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-6">
              <Card
                img="https://images.samsung.com/is/image/samsung/assets/ar/home-2023/elegidos-dic/ElegidosDelMes-Reyes_330x330-S21FE.png?$330_330_PNG$"
              />
              <Card
              img="https://images.samsung.com/is/image/samsung/assets/ar/home-2023/elegidos-dic/ElegidosDelMes-Reyes_330x330-Foldables.png?$330_330_PNG$"
              />
            </div>

          </ShowCaseCards>
        </div>
      </section>
    </main>
  )
}
