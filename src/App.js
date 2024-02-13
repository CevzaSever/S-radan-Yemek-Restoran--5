import './styles.css'
/* Challenge: 

Bu web sayfası, HTML öğeleri vanilla JS ile DOM'a eklenerek oluşturulmuştur. Göreviniz JS'yi React JSX'e dönüştürmek ve React ile sayfaya render etmek. İşte istediğimiz şeyler: 

        1. Sayfa, JSX ile yazılmış diğer fonksiyonel bileşenlerden ve elementlerden oluşan tek bir fonksiyonel React bileşeni tarafından render edilmelidir.
        
        2. Sonuç, mevcut sayfadan ayırt edilememelidir (bonus challenge yapmadığınız sürece).
        
        3. Mevcut JS'nin tamamı sonunda silinmelidir. 
        
        4. Kod modüler ve iyi organize edilmiş olmalıdır.
*/
const App=()=>{
    return(
        <>
        <Header/>
        <Main/>
        <Footer/>
        
        </>
    )
}
function Header(){

    return(
        <header>
        <div class="button-container">
        <button>Menu</button> 
        <button>Hakkında</button> 
        <button>Saatler & Lokasyon</button>
        </div> 
        </header>
        )
    }
function Main(){
return(
    <main>
        <h1 className="logo-container">Basit Yemekler Restoranı</h1>
        <p className='info-container'>Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.</p>
        <Image/>
    </main>
)
}

function Image(){
    return(
        <div className="image-container">
                            <div className="image-wrapper">
                                <img className="hot-dog" src="images/hotdogs.jpg"/>
                            </div>
                            <div className="image-wrapper">
                                <img src="images/sandwich.jpg"/>
                            </div> 
                            <div className="image-wrapper">
                                <img src="images/hamburger.jpg"/>
                            </div>  
                            {" "}                                
                        </div>
    )
}
function Footer(){
    return(
        <footer>
                    <p> 
                        Made by 
                        {" "}
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> 
                        {" "}
                        Coding Company</a>™.
                    </p>
                </footer>
    )
}


export default App
