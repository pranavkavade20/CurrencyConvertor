import { useState } from 'react'
import { InputBox } from "./components"
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState<number>(0)
    const [from, setFrom] = useState<string>("usd")
    const [to, setTo] = useState<string>("inr")
    const [convertedAmount, setConvertedAmount] = useState<number>(0)

    const currencyInfo: any = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    function handleClear() {
        setFrom(from)
        setTo(to)
        setConvertedAmount(0)
        setAmount(0)
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/7114268/pexels-photo-7114268.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <div className="flex gap-3">
                            <button type="submit" className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                            <button
                                type="button"
                                onClick={handleClear}
                                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                    <path d="M3 6h18" />
                                    <path d="M8 6V4h8v2" />
                                    <path d="M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14" />
                                    <path d="M10 11v6" />
                                    <path d="M14 11v6" />
                                </svg>
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
