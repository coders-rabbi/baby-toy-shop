import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import SingleProducts from './SingleProducts';

const ShopByCetagory = () => {

    const [products, setProducts] = useState([]);
    const [cetagory, setCetagory] = useState("Bike")
    console.log(cetagory);

    const handleCetagory = cetagory => {
        // console.log(cetagory);
        setCetagory(cetagory);
    }

    useEffect(() => {
        fetch(`https://baby-toy-shop-server-coders-rabbi.vercel.app/category/${cetagory}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [cetagory])




    return (
        <div>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab onClick={() => { handleCetagory("Car") }}>Cars</Tab>
                    <Tab onClick={() => { handleCetagory("Bike") }}>Bike</Tab>
                    <Tab onClick={() => { handleCetagory("Drone") }}>Drone</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-y-10'>
                                {
                                    products.map(product => <SingleProducts
                                        key={product._id}
                                        product={product}
                                    ></SingleProducts>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-y-10'>
                                {
                                    products.map(product => <SingleProducts
                                        key={product._id}
                                        product={product}
                                    ></SingleProducts>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 gap-y-10'>
                                {
                                    products.map(product => <SingleProducts
                                        key={product._id}
                                        product={product}
                                    ></SingleProducts>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCetagory;