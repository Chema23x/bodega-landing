import FrameFullWidth from "@/components/frameFullWidth/frameFullWith"
import Arrow from "@/components/arrow/arrow"
import Archives from "@/components/archivesfiles/archives"
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb"
import { topStores } from "@/utils/constants"
import { keys } from "@/utils/constants"
import { useState } from "react"
import ContentPage from "../ContentPage"
import { findUrl } from "@/utils/functions"

const TopStoresPage = () =>{

    const [selectedImg, setSelectedImg] = useState(null);
    const [file, setFile] = useState(keys[2])
    
    const handlePdfClick = (archiveTitle) => {
        setSelectedImg(archiveTitle)
    }

    return (
    <> 
        <section className={`${selectedImg === null ? "h-screen w-full relative" : "hidden"}`}>
            <div className="flex w-full items-center my-5">
                <Arrow
                    currentPage={"Distritos y Tiendas TOP"}
                />
                <BasicBreadcrumbs
                        previousPage={"Distritos y Tiendas TOP"}
                        page={""}
                />
            </div>

            <div className="flex flex-col items-center h-5/6 w-full gap-4">
                <FrameFullWidth 
                 textFrameFull={"Consulta nuestra información en los archivos adjuntos"}
                 imageSource={"assets/hoodies/hoodieAssetsPages.png"}
                 imageAlt={"hoodie page 2"}
                 textClassname="text-end w-full text-xs md:text-2xl lg:text-3xl md:text-center absolute top-10 md:top-7 right-6"
                 bgImage={"assets/bgImages/bgline.png"}
                />
            <div className="flex flex-col w-11/12 items-center mt-5">
                {topStores.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={""}
                        pdfAlt={"tiendas top"} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    />
                ))}
            </div>    
            </div>
        </section>
        {selectedImg && <ContentPage archiveTitle={selectedImg} section={file}  hide={() => handlePdfClick(null)}/>}
       <footer className="w-full flex justify-center mb-10 ">
        <div className="border-4 border-black w-10/12 p-6 font-semibold">
            <h2>Podrás solicitar reportes de ventas, aclaraciones, dudas, material POP, Contratos, herramientas de apoyo, capacitaciones,etc</h2>
            <h3 className="font-bold">Luz Ramírez</h3>
            <p>Luzmaría.ramirezneri@walmart.com
                <br />
                Cel. 56 5108 2396
            </p>
            <h3 className="font-bold">Yesenia Serrano</h3>
            <p>Yesenia.serrano@walmart.com
                <br />
                Cel. 56 5106 5818
            </p>
        </div>
       </footer>
    </>
    )
}

export default TopStoresPage;