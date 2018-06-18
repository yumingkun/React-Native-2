import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import DataRepository from './DataRepository';//加载封装的获取数据的组件

const Url='https://api.github.com/search/repositories?q=';//url的第一段
//完整的urlhttps://api.github.com/search/repositories?q=React-Native&sort=stars(React-Native是可变的，这也是切割url的原因)
const QUERY_STR='&sort=stars';//url第三段的查询条件

type Props = {};
export  default class Page1 extends Component<Props> {

    render( ) {//渲染函数
        return (
                <ScrollableTabView
                    tabBarBackgroundColor="#533537"
                    tabBarInactiveTextColor={"#e9e9ef"}
                    tabBarActiveTextColor={"#ff473a"}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <PopularTab tabLabel='JAVA'>1</PopularTab>
                    <PopularTab tabLabel='IOS'>2</PopularTab>
                    <PopularTab tabLabel='Android'>3</PopularTab>
                    <PopularTab tabLabel='React-Native'>4</PopularTab>
                </ScrollableTabView>
        );
    }
}
class PopularTab extends Component{
    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();//初始化(获取数据组件)对象
        this.state={//初始数据
            result:'',
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            // rowHasChanged(prevRowData, nextRowData)：指定我们更新row的策略，一般来说都是prevRowData和nextRowData不相等时更新row
        }
    }
    componentDidMount(){//页面一加载就加载数据
        this.loadData();
    }
    loadData(){//通过完整的url加载数据（通过调用自己定义的加载组件DataRepository）
        let url=this.getUrl();//根据用户输入的text生成完整的url
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items)
                    //要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法（如果用到了section，则对应cloneWithRowsAndSections方法）。
                    // 数据源中的数据本身是不可修改的，所以请勿直接尝试修改。
                    // clone方法会自动提取新数据并进行逐行对比（使用rowHasChanged方法中的策略），这样ListView就知道哪些行需要重新渲染了。
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)//设置错误
                })
            })
    }
    //生成完整的url
    getUrl(){
        return Url+this.props.tabLabel+QUERY_STR;
    }
    //列表渲染
    renderRow(item) {

        return <TouchableOpacity style={styles.container}>
            <View style={styles.cell_container}>
                <Text style={styles.title}>{item.full_name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={{color:'#8585ff'}}>Author:</Text>
                        <Image
                            style={{height: 22, width: 22}}
                            source={{uri: item.owner.avatar_url}}
                        />
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text>Star:</Text>
                        <Text>{item.stargazers_count}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }




    //渲染结果
    render(){
        return<View>
           <ListView
                dataSource={this.state.dataSource}//列表渲染数据源
                renderRow={(data)=>this.renderRow(data)}
           />
        </View>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
        flex: 1
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        //阴影
        shadowColor: 'gray',
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:2
    },
});
