import React from 'react';

const Background = ( { children } ) =>
{
    return (
        <body className="bg-[#D3D3D3]  dark:bg-[#C4A484] transition-all">
            {children}
        </body>
    )
}

export default Background;