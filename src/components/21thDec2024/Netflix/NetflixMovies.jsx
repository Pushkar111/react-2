import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/NetflixMovies.css";

export const NetflixMovies = () => {
    const movies = [
        {
            id: 101,
            name: "Lucky Baskhar",
            // image: "https://upload.wikimedia.org/wikipedia/en/6/6c/Lucky_Baskhar_film_poster.jpg",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ1aEijvIoQa5hLLuSWQkA2hsjnQxytDevB0RgNvYwuYW0ecNp-OCcVft91IZulHheJaAJqEylnRjS08PBnoC33-RQs_V5cc5EjhuZKmms0Gw8KPOlIPj65i8RLYCsj_92kfNpf6m-ZM_KGsjd9XyXJP2QVNF8d17leP_5hTKQHHR6_xej5Iy1fx_5gmWoZhe9FXp2NMWEY5WsqzacDin4TXlELZ5am0EgRmA_kIYYU6nN0ljp0VBko9B5bDYEzEBzSx0M82ZTWokyy1dJ2SuHUCoMkTfw.webp?r=fa2",
        },
        {
            id: 102,
            name: "Fighter",
            image: "https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg",
        },
        {
            id: 103,
            name: "Animal",
            image: "https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg",
        },
        {
            id: 104,
            name: "phir aayi haseen dilruba",
            image: "https://upload.wikimedia.org/wikipedia/en/b/be/Phir_Aayi_Hasseen_Dillruba.jpg",
        },
        {
            id: 105,
            name: "OMG",
            image: "https://upload.wikimedia.org/wikipedia/en/5/56/OMG_2_%E2%80%93_Oh_My_God%21_2_poster.jpg",
        },
        {
            id: 106,
            name: "Carry-On",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABViGzhD0UmDQkKkMkS-GnshNAsSlfhnbY5LviEtUy1oQnbfHy43k3UZOb8Rx0jwJIo51BJUt8SMUbs0Egqjp5nD0ZN44ZkCT3DSlqOi-xWMrgUgy0AfqJ3ybdrHAOJLDlWpCn_UVLg_dXZpbcSEmJVkEorwZ7oiVcb4KRLcnMn5A6DEndFe8RUCyCgvlN8YNwWTaEKZrhqz9E4VKHAKb0xwhVtjoRrme3G0oqqsRKO6l2bDMIru1ZRM4Qa008F6oLwIl6G9L-LbiD5FhvtAtUfrQA8-Z2RbZrS8SS00uYv5Br_vVcqqcHyeb8g.jpg?r=453",
        },
        {
            id: 107,
            name: "Amaran",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT1XtzRoyv51BzfeHUUrvs0bCPRca1UC9Pz6DY3TMTNTGVMfiZ79Rycx46FTdHYMPBOKxFfVN3s80AIA9vvaKfnwbsfo8EHaVx-GQ8Wap8MSm2Xd6Fb1Zb0Uprl1FDVBN1DMqTkv3t2PJczgBvsn2kWP9r6gDDLAZKQ7WDHkRyHFdK8Wm0J5Cy2fLobut0xcqB1gmM-xFgv1nTsmEwO_RtLgd8avsCIPqby05fOP_utfGLI_ZnqiAS_biXhBF7clWZTPgc4GQ0-o4V799pTOm8FCD_YOkw.webp?r=01f",
        },
        {
            id: 108,
            name: "Jigra",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTJvrLzzzIycJl9_-YOHZj2t9Rj95_IoM8ErfBI60GhoRbf3YO6QVjeWibZdTaPZI_HFgVJxe109TZRD4BA-1NIUJNiwJR6NRGDwkb5ByCCdwRmB2lg2H-hgE1MNBrpoXqX7SJxfR8T0-ktf-Rj406T9PQhPZHgtou1xs-yZUdqua0LDTi3hrOH0nqHnJ-zmWcckk2rhhvRZLlvoQeYf56yp63v3NnmJ0oqpOti6PY9jRC6kqusm82EvwaP10RqDhgG-2COc6Q-kmfh9mlnCi08GWt1R4A.webp?r=11d",
        },
        {
            id: 109,
            name: "Devara",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb-Yi8ZVZmyqbrHf9oKi-0R_JEtnm0gijnneTSNQSxuFhmGsSMaCdjTMX2r-Wxz6K4p-JY_kOXlGSLDXjwV7ItkD9J5_nIS2PDW1.webp?r=ea4",
        },
        {
            id: 110,
            name: "Thangalaan",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZ69li77RmO64jXpLvOV-2s3xul32q__Zv-cHFFB8EZ0X6Z3zLkyOuRBL07eqv19bRSqeud4ffj6zDntuRNfYDMOMcxE1eu4O5T5SbB8WATDGxwMlQgdao-D6djGKZo_QJS20I9JkT6onmgA1-DPmqZZ-rqkiuStndNpDE5A2NVDt5pmIaDwbOm4BWNL0vwY_N6CXYXwi0cNljjPAaBAXkRD22ym12sLlJRipHkFq4m2tUxjw0c9EODUg76lrq0JpEecaGlRlOdHxeV5NSuTQopts83m3w.webp?r=168",
        },
        {
            id: 111,
            name: "Sikandar ka Muqandar",
            image: "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfuuanWPSpfmIMnfMH29zNMUaLFCLtFX6qUtHetwsn8rqHoBasN2dRXLKB2Jr4d5iDSdJjtcKGA8GMASYxAae5QdEl69OjPW56P5-atMt1B-qEAuy2JkgHN8aqm6e-UUS4VULl5prKAxsjJzdLLMIN6Y23Y17BRBpjiSm9qbTD-pZSP8Ahsbc4lPW6qWr4DIErLD-Lhvx67zt5aMI4CnKM7pq_xz_bIIGgywkjioBUk-okcV_uV8X2YtGo0ozzJ-WC58r-Q8iY87Tc-GPMur7ZflxfMWc7BfCJuyiPLDG-C6JS4p1QF4dV6gKA.jpg?r=60b"
        },
        {
            id: 112,
            name: "Maharaja",
            image: "https://upload.wikimedia.org/wikipedia/en/8/82/Maharaja_2024_film_poster.jpg"
        },
        {
            id: 113,
            name: "Jawan",
            image: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
        },
        {
            id: 114,
            name: "Leo",
            image: "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg"
        },
    ];

    const scrollLeft = () => {
        const carousel = document.querySelector(".carousel");
        if (carousel) {
            carousel.scrollLeft -= carousel.offsetWidth;
        }
    };

    const scrollRight = () => {
        const carousel = document.querySelector(".carousel");
        if (carousel) {
            carousel.scrollLeft += carousel.offsetWidth;
        }
    };

    return (
        <div className="carousel-container">
            <h1>Netflix Movies</h1>
            <br />
            <div className="carousel-wrapper">
                <div className="carousel">
                    <button className="carousel-button left" onClick={scrollLeft}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    {movies.map((movie) => {
                        return (
                            // <li>
                            //     <Link to={`play/${movie.id}/${movie.name}`}>{movie.name}</Link>
                            // </li>

                            <div className="movie-card" key={movie.id}>
                                <Link to={`play/${movie.id}/${movie.name}`}>
                                    <img src={movie.image} alt={movie.name} />
                                    <div className="movie-title">
                                        {movie.id} {movie.name}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <button className="carousel-button right" onClick={scrollRight}>
                    <i class="fas fa-chevron-right right"></i>
                </button>
            </div>
        </div>
    );
};
