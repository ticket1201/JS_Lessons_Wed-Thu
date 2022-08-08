import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import s from './lesson3.module.css'

type filmType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}
type responseType = Array<filmType>

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<responseType>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState<responseType>([]);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName).then((data) => {
            setSearchResult(data)
        })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type).then(data => {
            setSearchResultByType(data)
        })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {searchResult
                        ? searchResult.map(el => {
                            return (
                                <div className={s.wrapper} key={el.imdbID}>
                                    <span>Type: {el.Type}</span>
                                    <span>Title: {el.Title}</span>
                                    <span>Year: {el.Year}</span>
                                    <img src={el.Poster} alt={'poster'}/>
                                </div>
                            )
                        })
                        : <div>Nothing to display here</div>}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t="movie">Movie</button>
                <button onClick={searchByType} data-t="series">Series</button>
                <div>
                    {searchResultByType
                        ? searchResultByType.map(el => {
                            return(
                                <div className={s.wrapper} key={el.imdbID}>
                                    <span>Type: {el.Type}</span>
                                    <span>Title: {el.Title}</span>
                                    <span>Year: {el.Year}</span>
                                    <img src={el.Poster} alt={'poster'}/>
                                </div>
                            )
                        })
                        : <div>Nothing to display here</div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Lesson3;