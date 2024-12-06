import { Benifits } from "../components/Benifits"
import { Charges } from "../components/Charges"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import Navbar from "../components/Navbar"
import { Table } from "../components/Table"

export const Home = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Benifits/>
        <Table/>
        <Charges/>
        <Footer/>
        </>
    )
}