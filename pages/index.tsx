import React from 'react'
import PDFButton from 'components/PDFButton'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js" />

      <main>
        <div className=" min-h-[50vh] w-full bg-[url(/img/welcome-bg.jpg)] bg-no-repeat bg-center bg-cover">
          <div className="w-full h-full min-h-[50vh] bg-black bg-opacity-10 flex items-center flex-col justify-center py-16">
            <img
              src="/img/logo.png"
              alt="Depo Dizayn Logo"
              className="max-w-xl w-11/12"
            />
            <PDFButton />
          </div>
        </div>

        <div className="container py-12 md:py-24">
          <h2 className="text-yellow-500 font-bold text-2xl md:text-4xl mb-8 md:mb-16 font-display">
            HAKKIMIZDA
          </h2>
          <p className="md:text-xl leading-normal text-neutral-600 font-light">
            Depo Dizayn olarak 2018 yılından itibaren çeșitli firmaların saha
            içi aktivitelerini gerçekleștiriyoruz. 1500 m2 alanımızda demirhane,
            marangozhane ve aplikasyon hizmetleri verilmekle birlikte,
            Türkiye’nin neresinde olursanız olun saha içi uygulama ekbimizle
            sizlerin hizmetinizdeyiz. Sizlere daha iyi hizmet vermek amacıyla
            faaliyetlerimize bașladığımız ilk günden bu yana, AR-GE üzerinde
            yoğunlaștığımız en önemli konumuzdur. Ar-ge sayesinde sizler için
            daha iyi ve daha kaliteli projeler gerçekleștiriyoruz. 30 kișilik
            saha ekbimiz, uzman pazarlama ve tasarım ekbimiz, ayrıca yönetim
            kadromuz siz değerli müșterilerimiz için uygun fiyat, yüksek kalite
            standartını yakalayabilmek için çalıșmalarını yoğunlaștırarak
            sürdürmektedir. Ülkemizde reklamcılık sektörü her geçen gün
            gelișmekte olmasının avantaj ve dejavantajları olduğunun
            farkındalığı ile yolumuza devam ediyoruz. Reklamcılık sektörünün her
            geçen gün gelișmesiyle akiplerimizde artmaktadır. Bizler
            müșterilerimize, köșe bașlarını tutan küçük ișletmeler gibi genel
            geçer gözü ile bakmıyoruz. Küçük ișletmelerin ellerinde olmayan
            çözümleri aracılık yaparak çözüme ulaștırdığı ve bu nedenle
            maliyetlerin arttığını varsaydığımızda, Depo Dizayn&apos;ın farkını
            ortaya koymuș oluruz. Indoor - Outdoor reklamcılık, basılı reklam
            ürünleri ve görsel reklamcılık çözümleri gibi, hedef kitlenize
            ulașabileceğiniz her yolu bünyemizde barındırıyoruz. Ayrıca Depo
            Dizayn olarak siz değerli müșterilerimize organizasyon, sunum,
            lasman, prodüksiyon gibi konularda da hizmet vermekteyiz. Ayrıca
            bünyemizde bulundurduğumuz profesyonel fotoğraf stüdyomuzla da
            hizmetinizdeyiz.
          </p>
        </div>

        <div className="container py-12 md:py-24">
          <h2 className="text-yellow-500 font-bold text-2xl md:text-4xl mb-8 md:mb-16 font-display">
            HİZMETLERİMİZ
          </h2>
          <div className="grid gap-16 md:gap-12 grid-cols-1 md:grid-cols-2">
            <div>
              <img src="/img/digital-printing.png" className="w-12 md:w-16" />
              <h3 className="text-neutral-700 text-2xl my-4 md:my-8 font-medium">
                Dijital Baskı
              </h3>
              <p className="md:text-xl leading-normal text-neutral-500">
                İki adet iç mekan, bir adet dıș mekan dijital baskı
                makinelerimizle siz değerli müșterilerimize dijital baskı
                çözümleri sunmaktayız. Yüksek çözünürlüklü olan makinelerimizle
                gerçeğine yakın görüntüler çarpıcı renkler olușturmakla
                birlikte, yüksek kaliteye sahip baskılar elde etmekteyiz.
                Makinelerimizin rutin bakımları ile birlikte, aldığımız
                profesyonel destek ile sürdürülebilir kalite standartlarımızı
                daha ileri tașımaya gayret etmekteyiz. Siz müșterilerimize
                sunacağımız kaliteli baskılarımızla, sizlerinde kalite
                anlayıșınızı ortaya koymaktayız.
              </p>
            </div>

            <div>
              <img src="/img/exhibition-stand.png" className="w-12 md:w-16" />
              <h3 className="font-semibold text-neutral-700 text-2xl my-4 md:my-8">
                Fuar Stand Tasarım
              </h3>
              <p className="md:text-xl leading-normal text-neutral-500">
                Modelleme departmanımızın sürdüğü çalıșmalar içerisinde ki fuar
                stand tasarım ve uygulama konusu, grafik departmanı ile birlikte
                eș zamanlı ve takım ruhu ile çalıșarak, siz müșterilerimizin
                diğer rakiplerinizle bir araya geldiğiniz tek ortam olan fuar
                alanlarını, farkınızı ortaya koyabilmek ve sizi diğer
                rakiplerinizden farklı olduğunuzu gösterebileceğimiz bir fırsat
                olduğunu düșünerek, bu fırsatı hem sizin hemde bizlerin görsel
                bir show alanı olarak değerlendirip, sizleri tanıtacak ve akılda
                kalıcı bir görsellik sunacağımız, hedef kitleniz ile aranızdaki
                bağı kuvvetlendirecek farklı ve çarpıcı tasarımların
                hazırlanacağı bir konu olarak görmekteyiz.
              </p>
            </div>

            <div>
              <img src="/img/special-design.png" className="w-12 md:w-16" />
              <h3 className="font-semibold text-neutral-700 text-2xl my-4 md:my-8">
                Özel Tasarımlar
              </h3>
              <p className="md:text-xl leading-normal text-neutral-500">
                Aslında sizin için gerçekleștirdiğimiz tüm projeler özeldir.
                Ancak özel tasarımdan kastımız, özel ativitelerinizde size özel,
                sizi anlatan tasarım ve uygulamalar gerçekleștirmektir.
                Organizasyonlarınızda, sunumlarınızda, fuar standlarınızda
                kullanabileceğiniz tasarımlar veya fuar stanlarınızı özel
                tasarımlar olarak gerçekleștirebiliriz. Sosyal sorumluluk veya
                sunum projelerinizde cinevizyon alanları, reklam
                ativitelerinizde oyun alanları, promosyon dağıtım standları gibi
                fuar dıșı projelerinizde sizleri temsil edecek her türlü
                metaryel bizim için özel tasarım alanına girmektedir.
              </p>
            </div>

            <div>
              <img src="/img/lightbox.png" className="w-12 md:w-16" />
              <h3 className="font-semibold text-neutral-700 text-2xl my-4 md:my-8">
                Lightbox
              </h3>
              <p className="md:text-xl leading-normal text-neutral-500">
                Reklam alanlarında dikkati çekmesi için tercih edilen ışıklı
                panellerdir. Bu panellerin tasarımında ince bir tasarımdan
                yararlanılır. Reklam gereksinimi olan hemen her sektör için
                tercih edilebilecek tasarımlardır. Dekoratif açıdan önemli bir
                yenilik olarak görülmesinin yanında akılda kalıcılığı yüksek
                olan çalışmalardır. Günümüzde birçok firmanın tercih etmiş
                olduğu reklam ve tanıtım çalışmaları arasında yer alır. UV baskı
                çeşitlerinin de kullanıldığı bu ürünlerde yüksek standartlarda
                bir kalite mevcuttur. Tek taraflı modeller, ayaklı modeller,
                çift taraflı modeller ile özel modeller olmak üzere birçok
                farklı türü bulunur. İşletmeler ve firmalar gereksinimlerine en
                uygun olan tasarımı rahatlıkla seçebilme şansına sahiptir.
                Modeller duvara monte edilebildiği için yer konusunda herhangi
                bir şekilde yer problemi yaratmazlar.
              </p>
            </div>
          </div>

          <div className="text-neutral-500 mt-8">
            <h3 className="font-semibold text-neutral-700 text-2xl my-4 md:my-8">
              Lightbox Kullanım Alanları
            </h3>

            <p className="md:text-xl leading-normal text-neutral-500">
              Lightbox tabela üzerinde baskılı kumaşlar bulunur. Çok farklı
              kumaş yüzeyleri tercih edilebilir. Kumaşların üzerine yapılan
              baskılar ise UV baskı olarak yer alır. Panel üzerinde LED
              aydınlatma bulunur. Bu uygulama sayesinde sergilenmek istenilen
              görüntü çok daha canlı bir şekilde ortaya çıkarılabiliyor.
              Lightbox tabela kullanım alanları arasında şunlardan bahsetmek
              mümkündür:
            </p>

            <ul className="list-disc pl-10 py-4">
              <li>Showroom</li>
              <li>Ofisler</li>
              <li>Etkinlikler</li>
              <li>Reklam alanları</li>
              <li>Vitrin dekorasyonu</li>
              <li>Fuar alanları ve stantları</li>
              <li>Müzeler</li>
              <li>Sinema ve tiyatro salonları</li>
              <li>Restoran ve oteller</li>
              <li>Sergi salonları</li>
            </ul>

            <p className="md:text-xl leading-normal text-neutral-500">
              Gibi birçok farklı kullanım alanı vardır. Bu ürünlerde farklı
              kategoriler olduğu için kullanılacak alana uygun olarak en uygun
              olan model rahatlıkla tercih edilebilir.
            </p>
          </div>
        </div>

        <div className="bg-yellow-500 py-16">
          <div className="container">
            <div className="text-white font-black text-3xl md:text-5xl font-display">
              BİZE NASIL ULAŞABİLİRSİNİZ?
            </div>

            <div className="mt-8 grid grid-cols-1 gap-2">
              <div className="text-lg text-neutral-100">
                <b>E-posta:</b> info@depodizayn.com.tr
              </div>

              <div className="text-lg text-neutral-100">
                <b>Adres:</b> Huzur Mahallesi, Tomurcuk 1 Sokak, Ercan İş
                Merkezi, No: 9 Kat: 1, Sarıyer/İstanbul
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.1571333765549!2d29.001349879033835!3d41.10269424336839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e681f89dccb0e3d!2zNDHCsDA2JzA5LjQiTiAyOcKwMDAnMDUuOSJF!5e0!3m2!1str!2str!4v1655500188600!5m2!1str!2str"
                width="100%"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none mt-8 rounded-sm"></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
