import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoCloseCircleSharp } from "react-icons/io5";
import spain from '../media/spain.png'
import uk from '../media/united-kingdom.png'

export const Info = ({ setShowInfo }) => {
    const [enStyle, setEnStyle] = useState({ border: "3px solid white" });
    const [spStyle, setSpStyle] = useState({ border: "3px solid #48b6d8" });
    const [language, setLanguage] = useState('Sp');
    
    const linkToApi = () =>{
        window.open('https://api.le-systeme-solaire.net/', '_blank', 'noreferrer')

    }
    const changeLang = (e) => {
        setLanguage(e.target.id)
        if (e.target.id === "Sp") {
            setSpStyle({ border: "3px solid #48b6d8" });
            setEnStyle({ border: "3px solid white" })
        } else {
            setEnStyle({ border: "3px solid #48b6d8" })
            setSpStyle({ border: "3px solid white" });
        }
    }

    const backToList = () => {
        setShowInfo(false)
    }
    return (
        <div className='bigCardContainer'>
            <div className='bigCard'>
                <div className='bigCardTitleContainer'>
                    <div className='infoFlags'>
                        <div style={spStyle}>
                            <img src={spain} alt="Spanish Flag" id="Sp" onClick={changeLang}  />
                        </div>
                        <div style={enStyle}>
                            <img src={uk} alt="Uk Flag" id="En" onClick={changeLang}  />
                        </div>
                    </div>
                    <p onClick={backToList} className="closeIcon"><IoCloseCircleSharp /></p>
                </div>
                <div className='infoBody'>
                    {language === "Sp" ?
                        <div className='Sp'>
                            <h3>Solar System Bodies</h3>
                            <p>App realizada con <strong>vanilla React</strong> usando los datos de la siguiente API:</p>
                            <p className='link' onClick={linkToApi}>https://api.le-systeme-solaire.net/</p>
                            <h4>Algunas características de la app:</h4>
                            <ul>
                                <li>
                                    <span>Estilos:</span>
                                    <ul>
                                        <li>
                                            <strong>Imágenes</strong>: la fuente es principalmente Wikipedia.
                                        </li>
                                        <li>
                                            <strong>Imágenes de respaldo</strong>: en caso de no poder cargar la imagen la app proporciona una imagen de alternativa.
                                        </li>
                                        <li>Uso de <strong>Grid y Flexbox</strong>.</li>
                                        <li><strong>Responsive</strong> para móvil.</li>
                                        <li> Estilos en <strong>SCSS</strong> puro sin ayuda de librerías externas.</li>
                                    </ul>
                                </li>
                                <li><span>Menu</span>: Se muestran resultados por separado de planetas, planetas enanos, lunas, cometas y asteroides</li>
                                <li><span>Paginación de resultados.</span></li>
                                <li><span>Busqueda por nombre</span> (usar 'enter' para mostrar búsqueda).</li>
                                <li><span>Filtros de ordenación</span> para mostrar resultados. Dependen del tipo de elemento a buscar.</li>
                                <li><span>Ficha con información en detalle</span> al pulsar el icono de la imagen</li>
                                <li><span>Representación gráfica</span> de resultados en la ficha con gráficas de barras sin ayuda de librerías externas.</li>
                            </ul>
                        </div>
                        :
                        <div className='En'>
                             <h3>Solar System Bodies</h3>
                            <p>App made with <strong>vanilla React</strong> only. Fetching data from the following API:</p>
                            <p className='link' onClick={linkToApi}>https://api.le-systeme-solaire.net/</p>

                            <h4>Features:</h4>
                            <ul>
                                <li>
                                    <span>Styles:</span>
                                    <ul>
                                        <li>
                                            <strong>Pictures</strong>: main source Wikipedia.
                                        </li>
                                        <li>
                                            <strong>Fallback images</strong>: in case of broken link the app will it with a fallback image.
                                        </li>
                                        <li>Use of <strong>Grid y Flexbox</strong>.</li>
                                        <li><strong>Responsive</strong> for desktop and mobile.</li>
                                        <li> Styles with <strong>SCSS</strong> without externL libraries.</li>
                                    </ul>
                                </li>
                                <li><span>Menu</span>: The info is shown in the categories displayed in the menu (planets, dwarf planets, moons, comets and asteroids).</li>
                                <li><span>Results are paginated.</span></li>
                                <li><span>Search input by name</span> (use 'enter' to show your results).</li>
                                <li><span>Filters to sort the data</span>. Filters change depending on the category.</li>
                                <li><span>Individual window for all data in detail for each body</span> when you click on the icon of the picture.</li>
                                <li><span>Bar charts</span> to show data. Created without external libraries. Just vanilla React and SCSS</li>
                            </ul>
                        </div>
                    }


                </div>
            </div>
        </div>
    )
}