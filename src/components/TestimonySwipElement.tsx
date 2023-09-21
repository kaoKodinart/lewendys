import { Typography, styled } from '@mui/material';
// import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import "swiper/css/effect-fade";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const TestimonySwipElementStyle = styled("div")(({theme})=>({
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
    [theme.breakpoints.down('sm')]: {
        flexDirection:"column",
        marginBottom: "10px",
        },
}));
const ElementLeft = styled("div")(({theme})=>({
    width:"40%",
    // backgroundColor:"crimson",
    display:"grid",
    placeItems:"flex-end",
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        placeItems:"center",
        },
}));
const ElementRight = styled("div")(({theme})=>({
    width:"60%",
    [theme.breakpoints.down('sm')]: {
        width:"100%",

        },
}));

const TestimonySwipTextContent = styled("div")(({theme})=>({
    padding:"20px 0px 20px 0px",
    display:"grid",
    placeItems:"center",
    width:"75%",
    backgroundColor:"white",
    [theme.breakpoints.down('lg')]: {
        width:"85%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
    },
    
}));
const TestimonySwipText = styled(Typography)(({theme})=>({
    fontFamily:"PoppinsRegular, sans-serif !important",
    fontSize:"1.0em",
    width:"75%",
    textAlign:"center",
    [theme.breakpoints.down('md')]: {
        fontSize:"0.85em",
        width:"85%",
        },
}));

const TestimonySwipImg = styled("img")(({theme})=>({
    marginRight:'-100px',
    [theme.breakpoints.down('lg')]: {
        width:"100%",
        marginRight:'-75px',
        },
    [theme.breakpoints.down('md')]: {
        width:"100%",
        marginRight:'-50px',
        },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginRight:'0px',
        },
}));
const TestimonySwipQuotes = styled("img")(()=>({
    width:"2em",
    height:"2em",
}));

const SwipeContent = styled("div")(({theme})=> ({

    width:"calc(100% - 24vw)",
    padding:"0px 12vw 0px 12vw",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"3px",
    [theme.breakpoints.down('lg')]: {
        padding:"0px 8vw 0px 8vw",
        width:"calc(100% - 16vw)",
        },
    [theme.breakpoints.down('md')]: {
        padding:"0px 5vw 0px 5vw",
        width:"calc(100% - 10vw)", 
        },
}))

function TestimonySwipElement() {
    return (
            <SwipeContent>
                <Swiper 
                // effect={"fade"}
                slidesPerView={1}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    className="mySwiper"

                >
                    <SwiperSlide >
                        {/* <TestimonySwipElementStyle > */}
                        <TestimonySwipElementStyle>
                            <ElementLeft>
                                <TestimonySwipImg src='/src/assets/images/testimony_image_1.png'/>
                            </ElementLeft>
                            <ElementRight>
                                <TestimonySwipTextContent>
                                    <TestimonySwipQuotes  src='/src/assets/images/testimony_quotes.png'/>
                                    <TestimonySwipText>
                                        Lorem ipsum dolor sit amet consectetur. Ipsum id donec tellus ultrices arcu purus. Dapibus proin non est mollis nec a. Dignissim velit ligula varius diam eget id mattis euismod eget. Nisl egestas tortor lorem nulla est et pretium commodo penatibus. Leo mauris vitae scelerisque in ipsum commodo sed libero ac.
                                    </TestimonySwipText>
                                </TestimonySwipTextContent>
                            </ElementRight>
                        </TestimonySwipElementStyle>
                    </SwiperSlide>
                    <SwiperSlide >
                        {/* <TestimonySwipElementStyle > */}
                        <TestimonySwipElementStyle>
                            <ElementLeft>
                                <TestimonySwipImg src='/src/assets/images/testimony_image_2.png'/>
                            </ElementLeft>
                            <ElementRight>
                                <TestimonySwipTextContent>
                                    <TestimonySwipQuotes  src='/src/assets/images/testimony_quotes.png'/>
                                    <TestimonySwipText>
                                        Lorem ipsum dolor sit amet consectetur. Ipsum id donec tellus ultrices arcu purus. Dapibus proin non est mollis nec a. Dignissim velit ligula varius diam eget id mattis euismod eget. Nisl egestas tortor lorem nulla est et pretium commodo penatibus. Leo mauris vitae scelerisque in ipsum commodo sed libero ac.
                                    </TestimonySwipText>
                                </TestimonySwipTextContent>
                            </ElementRight>
                        </TestimonySwipElementStyle>
                    </SwiperSlide>
                    <SwiperSlide >
                        {/* <TestimonySwipElementStyle > */}
                        <TestimonySwipElementStyle>
                            <ElementLeft>
                                <TestimonySwipImg src='/src/assets/images/testimony_image_3.png'/>
                            </ElementLeft>
                            <ElementRight>
                                <TestimonySwipTextContent>
                                    <TestimonySwipQuotes  src='/src/assets/images/testimony_quotes.png'/>
                                    <TestimonySwipText>
                                        Lorem ipsum dolor sit amet consectetur. Ipsum id donec tellus ultrices arcu purus. Dapibus proin non est mollis nec a. Dignissim velit ligula varius diam eget id mattis euismod eget. Nisl egestas tortor lorem nulla est et pretium commodo penatibus. Leo mauris vitae scelerisque in ipsum commodo sed libero ac.
                                    </TestimonySwipText>
                                </TestimonySwipTextContent>
                            </ElementRight>
                        </TestimonySwipElementStyle>
                    </SwiperSlide>
                </Swiper>
            </SwipeContent>

    );
}

export default TestimonySwipElement;