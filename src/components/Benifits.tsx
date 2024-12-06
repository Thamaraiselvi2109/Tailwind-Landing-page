import Benefit, { BenefitItem } from "../datas/benefitData"

export const Benifits = () => {
    return (
        <div className="container-props">
            <h3 className="text-h1 pb-12">Key Benifits</h3>
            <div className="flex flex-wrap justify-center">
                {Benefit.map((item: BenefitItem) => (
                    <div className="benifits-cont">
                        <div className="benifits-props">
                        <h3 className="text-title">{item.title}</h3>
                        <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}