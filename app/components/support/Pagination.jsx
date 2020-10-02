import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './PaginationStyle'

export default ({value}) => {
    const {total, ByPage, changePage, currentPage} = value
    const pageNumbers =  []
    const conditional = Math.ceil(total / ByPage)

    for (let i = currentPage; i <= conditional; i++) { 
        pageNumbers.push(i)

        if(i > currentPage + 1 ) break
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={()=>{currentPage > 1 && changePage(currentPage - 1)}}
            style = {styles.buttonsActive}>
                <Text style={{fontSize:25}}>{'<'}</Text>
            </TouchableHighlight>
            {pageNumbers.map(p => {
                return (
                    <TouchableHighlight onPress={()=>{changePage(p)}}
                    style={currentPage === p ? styles.buttonsActive : styles.buttons}>
                        <Text style={{fontSize:25}}>{p}</Text>        
                    </TouchableHighlight>
                )
            })}
            <TouchableHighlight style = {styles.buttonsActive}
            onPress={()=>{currentPage < total && changePage(currentPage + 1)}}>
                <Text style={{fontSize:25}}>{'>'}</Text>
            </TouchableHighlight>
        </View>
    )
}