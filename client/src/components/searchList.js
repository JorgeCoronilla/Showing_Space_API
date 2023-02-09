import React from 'react'

export const SearchList = ({ filterdList }) => {
    return (
        <div className='searchList'>
            {filterdList.length > 1 &&
                <div>
                    {filterdList.map((item, index) => {
                        return (
                            <div key={item.diameter}>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>

            }
        </div>

    )
}
