import React, { useState, useEffect } from 'react';
import FrameFullWidth from '@/components/frameFullWidth/frameFullWith';
import Arrow from '@/components/arrow/arrow';
import Archives from '@/components/archivesfiles/archives';
import BasicBreadcrumbs from '@/components/breadcrumb/breadcrumb';
import ContentPage from '../ContentPage';
import { comics, keys } from '@/utils/constants';
import { findUrl } from '@/utils/functions';

const ComicsPage = () => {
    const [selectedComic, setSelectedComic] = useState(null);
    const [file] = useState(keys[2]);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePdfClick = (archiveTitle) => {
        setSelectedComic(archiveTitle);
    };

    return (
        <>
            <section className={`${selectedComic === null ? "h-screen w-screen relative" : "hidden"}`}>
                <div className="flex w-full items-center my-5">
                    <Arrow currentPage={"Historietas"} />
                    <BasicBreadcrumbs previousPage={"Historietas"} page={""} />
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
                        {comics.map((archiveTitle) => (
                            <Archives
                                key={archiveTitle}
                                icon={"assets/icons/bookIcon.png"}
                                pdfAlt={"pdfIcon"}
                                archivetitle={archiveTitle}
                                onClick={isLargeScreen ? () => handlePdfClick(archiveTitle) : () => findUrl(archiveTitle)}
                                downloadArchive={() => findUrl(archiveTitle)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {selectedComic && <ContentPage archiveTitle={selectedComic} section={file} hide={() => handlePdfClick(null)} />}
        </>
    );
};

export default ComicsPage;
