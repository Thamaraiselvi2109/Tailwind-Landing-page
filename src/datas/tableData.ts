export type TABLETYPE = {
    id:number,
    segment:string,
    chargers:string
}
const tableData = [
    {
        id:1,
        segment: "Equity Delivery",
        chargers: "Rs 20 or 2.5% of turnover (whichever is lower)"
    },
    {
        id:2,
        segment: "Equity Intraday",
        chargers: "Rs 20 or 0.05% of turnover (whichever is lower)."
    },
    {
        id:3,
        segment: "Equity Future",
        chargers: "Rs. 0.01 up to Rs 20 per Executed Order."
    },
    {
        id:4,
        segment: "Equity Options",
        chargers: "Rs 20 per order."
    }
]
export default tableData;