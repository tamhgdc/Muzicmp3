import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetHomePage1, GetHomePage2, GetHomePage3 } from '~/services';
import Banner from './Banner/banner';

function Home() {
    // eslint-disable-next-line no-unused-vars
    const [banner, home, recent, ...dataPage1Items] = GetHomePage1();
    // eslint-disable-next-line no-unused-vars
    const [radio, ...dataPage2Items] = GetHomePage2();
    // eslint-disable-next-line no-unused-vars
    const [chart, week, slide, album, event] = GetHomePage3();
    const dataPage3Items = [];
    dataPage3Items.push(album);
    const [indexLike, setIndexLike] = useState();

    document.title = 'Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV';

    const like = useRef(null);
    const dislike = useRef(null);
    const handleLike = (indexx) => {
        setIndexLike(indexx);
    };

    const loading = () => {
        return (
            <>
                <div className="pageTitle loading" style={{ width: '30%', marginTop: '10px', height: '25px' }}></div>
                <div className="row sm-gutter boxBanner">
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                </div>
                <div className="pageTitle loading" style={{ width: '30%', marginTop: '10px', height: '25px' }}></div>
                <div className="row sm-gutter boxBanner">
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                </div>
                <div className="pageTitle loading" style={{ width: '30%', marginTop: '10px', height: '25px' }}></div>
                <div className="row sm-gutter boxBanner">
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                    <div className="col l_2_4 m_6 c_12 ">
                        <div className="bannerImg loading"></div>
                        <div
                            className="songName loading"
                            style={{ width: '100%', marginTop: '10px', height: '25px' }}
                        ></div>
                    </div>
                </div>
            </>
        );
    };

    const render = () => {
        return (
            <>
                {dataPage1Items.length > 0 &&
                    dataPage1Items.slice(1).map((item, index) => {
                        return (
                            <div key={index}>
                                <h2 className="pageTitle">{item.title}</h2>
                                <div className="row sm-gutter boxBanner">
                                    {item.items.slice(0, 5).map((items, indexx) => {
                                        return (
                                            <div className="col l_2_4 m_6 c_12 " key={indexx}>
                                                <div className="bannerImg">
                                                    <div className="btnImgList">
                                                        <img className="imgList " src={items.thumbnail} alt="" />
                                                    </div>
                                                    <Link
                                                        to={`/detail/album/${items.encodeId}`}
                                                        className="playSongMain"
                                                    >
                                                        <div className="btnLike">
                                                            <i
                                                                ref={dislike}
                                                                className={
                                                                    indexLike !== indexx
                                                                        ? 'icon mainListLike ic-like'
                                                                        : 'icon mainListLike ic-like hidden'
                                                                }
                                                                onClick={() => handleLike(indexx)}
                                                            ></i>
                                                            <i
                                                                ref={like}
                                                                className={
                                                                    indexLike === indexx
                                                                        ? 'icon mainListFullLike ic-like-full'
                                                                        : 'icon mainListFullLike ic-like-full hidden'
                                                                }
                                                            ></i>
                                                        </div>

                                                        <div className="linkAlbum">
                                                            <i className="icon mainListPlay ic-play-circle-outline"></i>
                                                        </div>
                                                        <div className="btnLike songMore">
                                                            <i className="icon mainListMore ic-more"></i>
                                                            <div className="songMoreDetail"></div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h3 className="songName">{items.title}</h3>
                                                <h5 className="songerName">{items.sortDescription}</h5>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                {dataPage2Items.length > 0 &&
                    dataPage2Items.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2 className="pageTitle">{item.title}</h2>
                                <div className="row sm-gutter boxBanner">
                                    {item.items.slice(0, 5).map((items, indexx) => {
                                        return (
                                            <div className="col l_2_4 m_6 c_12 " key={indexx}>
                                                <div className="bannerImg">
                                                    <div className="btnImgList">
                                                        <img className="imgList " src={items.thumbnail} alt="" />
                                                    </div>
                                                    <Link
                                                        to={`/detail/album/${items.encodeId}`}
                                                        className="playSongMain"
                                                    >
                                                        <div className="btnLike">
                                                            <i
                                                                ref={dislike}
                                                                className={
                                                                    indexLike !== indexx
                                                                        ? 'icon mainListLike ic-like'
                                                                        : 'icon mainListLike ic-like hidden'
                                                                }
                                                                onClick={() => handleLike(indexx)}
                                                            ></i>
                                                            <i
                                                                ref={like}
                                                                className={
                                                                    indexLike === indexx
                                                                        ? 'icon mainListFullLike ic-like-full'
                                                                        : 'icon mainListFullLike ic-like-full hidden'
                                                                }
                                                            ></i>
                                                        </div>

                                                        <div className="linkAlbum">
                                                            <i className="icon mainListPlay ic-play-circle-outline"></i>
                                                        </div>
                                                        <div className="btnLike songMore">
                                                            <i className="icon mainListMore ic-more"></i>
                                                            <div className="songMoreDetail"></div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h3 className="songName">{items.title}</h3>
                                                <h5 className="songerName">{items.sortDescription}</h5>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}

                {dataPage3Items.length > 0 &&
                    dataPage3Items.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2 className="pageTitle">{item.title}</h2>
                                <div className="row sm-gutter boxBanner">
                                    {item.items.slice(0, 5).map((items, indexx) => {
                                        return (
                                            <div className="col l_2_4 m_6 c_12 " key={indexx}>
                                                <div className="bannerImg">
                                                    <div className="btnImgList">
                                                        <img className="imgList " src={items.thumbnail} alt="" />
                                                    </div>
                                                    <Link
                                                        to={`/detail/album/${items.encodeId}`}
                                                        className="playSongMain"
                                                    >
                                                        <div className="btnLike">
                                                            <i
                                                                ref={dislike}
                                                                className={
                                                                    indexLike !== indexx
                                                                        ? 'icon mainListLike ic-like'
                                                                        : 'icon mainListLike ic-like hidden'
                                                                }
                                                                onClick={() => handleLike(indexx)}
                                                            ></i>
                                                            <i
                                                                ref={like}
                                                                className={
                                                                    indexLike === indexx
                                                                        ? 'icon mainListFullLike ic-like-full'
                                                                        : 'icon mainListFullLike ic-like-full hidden'
                                                                }
                                                            ></i>
                                                        </div>

                                                        <div className="linkAlbum">
                                                            <i className="icon mainListPlay ic-play-circle-outline"></i>
                                                        </div>
                                                        <div className="btnLike songMore">
                                                            <i className="icon mainListMore ic-more"></i>
                                                            <div className="songMoreDetail"></div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h3 className="songName">{items.title}</h3>
                                                <h5 className="songerName">{items.sortDescription}</h5>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
            </>
        );
    };

    return (
        <>
            <div className="grid wide">
                <Banner />

                <div className="root">{dataPage1Items.length > 0 ? render() : loading()}</div>
            </div>
        </>
    );
}
export default Home;
