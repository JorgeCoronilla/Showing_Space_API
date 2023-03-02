import React from 'react'

export const SearchList = ({ filterdList }) => {
    return (
        <div className='searchList'>
            {filterdList.length > 1 ?
                <div>
                    {filterdList.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <p>{item.englishName}</p>
                            </div>
                        )
                    })}
                </div>
                :
                <div>
                    <p>{filterdList[0].englishName}</p>
                </div>
            }
        </div>
    )
}
