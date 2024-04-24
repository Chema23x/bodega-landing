
    import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
    import Arrow from "@/components/arrow/arrow";
    import Archives from "@/components/archivesfiles/archives";
    import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
    import { videos } from "@/utils/constants";
    import { keys } from "@/utils/constants";
    import { useState } from "react";
    import ContentPage from "../ContentPage";
    import { findUrl } from "@/utils/functions";
    
    const  VideosPage = () =>{

        const [selectedVideo, setSelectedVideo] = useState(null);
        const [file, setFile] = useState(keys[3])
        
        const handlePdfClick = (archiveTitle) => {
            setSelectedVideo(archiveTitle);
        };
    
    
        return (
        <> 
            <section className={`${selectedVideo === null ? "h-screen w-screen relative" : "hidden"}`}>
                <div className="flex w-full items-center my-5">
                    <Arrow
                        currentPage={"Videos"}
                    />
                    <BasicBreadcrumbs
                        previousPage={"Videos"}
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
                 <div className="hidden md:flex md:flex-col md:w-11/12 md:items-center md:mt-5">
                {comics.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={"assets/icons/bookIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    />
                ))}
            </div> 
            <div className="flex flex-col w-11/12 items-center mt-5 md:hidden">
                {comics.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={"assets/icons/bookIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={archiveTitle} 
                        onClick={() => findUrl(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    />
                ))}
            </div>     
                </div>
            </section>

        {selectedVideo && <ContentPage archiveTitle={selectedVideo} section={file}  hide={() => handlePdfClick(null)}/>}
    </>            
        )
    }   

    export default VideosPage;