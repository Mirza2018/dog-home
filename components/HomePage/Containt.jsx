import Image from 'next/image';
import React from 'react';
import dogImage from "../../asserts/dog.png"

const Containt = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div>
                <Image src={dogImage} alt='Dog Image' ></Image>
            </div>
            <div>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo quidem non nam. Repudiandae iste reiciendis aperiam, a eaque corrupti quae suscipit velit quasi quia maiores quaerat numquam consectetur temporibus!
                </h1>
            </div>
        </div>
    );
};

export default Containt;