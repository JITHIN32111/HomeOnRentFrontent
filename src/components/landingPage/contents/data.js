import HeroImg from "../../../assets/jk.png"
import aboutImg from "../../../assets/img/hero/image.svg"
import bg from "../../../assets/bg.png"
import f1 from '../../../assets/1.jpg'
import f2 from '../../../assets/2.jpg'
import f3 from '../../../assets/3.jpg'
import f4 from '../../../assets/4.jpg'
import logo from '../../../assets/logo.png'
import {FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'
import {BsChatDotsFill} from  'react-icons/bs'


export const herodata={
    title:'Place House faster easier'
    ,subtitle:'Experience the ease of listing your property with HomeOnRent. Our streamlined process ensures you can place your house faster and with minimal effort.'
    ,btnText:'Get Started',
    image:HeroImg,
}
export const aboutdata={
    image:aboutImg,
    title:'Find out little more about as'
    ,subtitle:' At HomeOnRent, we are more than just a platform; we are your dedicated partner in finding the perfect home. Learn about our mission and values below.'
}
export const featuredata={

    title:'Some Services We Offer'
    ,subtitle:'"Discover Your Dream Home with HomeOnRent - Your Ultimate House Rental Platform,Explore a world of comfort and convenience. HomeOnRent brings you a curated collection of rental properties to suit your lifestyle"'
    ,list:[
        {
            image:f1,
            bg:bg,
            title:'Transparent Transactions'
            ,describtion:'Transparent transactions you can trust. With HomeOnRent, ',
            linktext:'Learn more',
            delay:'400'
        },{
            image:f2,
            bg:bg,
            title:'Easy Booking'
            ,describtion:'Book your next home effortlessly. Our user-friendly platform ensures a seamless rental process from search to move-in',
            linktext:'Learn more',
            delay:'400'
        },{
            image:f3,
            bg:bg,
            title:'Search and Find'
            ,describtion:'Find the perfect home for your unique needs. Our extensive database makes house hunting a breeze.',
            linktext:'Learn more',
            delay:'400'
        },{
            image:f4,
            bg:bg,
            title:'Personalized Experience'
            ,describtion:'Your preferences, your style. HomeOnRent tailors your rental experience to match your unique lifestyle.',
            linktext:'Learn more',
            delay:'400'
        }

    ]
}
export const footerData={
    logo:logo,
    address:'Product Texas,234 Bokki Avenue Street BMN 99388',
    email:'info@producttexas.project',
    phone:'1-232-7788(Main)'
    ,list1:[
        {
            name:'Profile',
            href:'#'
        },
        {
            name:'Features',
            href:'#'
        },
        {
            name:'Careers',
            href:'#'
        },
        {
            name:'DW News',
            href:'#'
        },
    ],
    list2:[
        {
            name:'Support',
            href:'#'
        }, {
            name:'Sign up',
            href:'#'
        },
        {
            name:'Guide',
            href:'#'
        },
        {
            name:'Reports',
            href:'#'
        },
        {
            name:'Q & A',
            href:'#'
        },
    ],
    socialList:[
        {
            icon:'lkjh',
            href:'#'
        }, {
            icon:'khhkj',
            href:'#'
        }, {
            icon:'lihl',
            href:'#'
        },
    ]
}
export const copyrightData={
    text:'@ Product Texas 2022,All rights reversed.Company Registration Number :09833888',
    icon:'khkj'
}