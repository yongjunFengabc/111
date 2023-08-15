import React from 'react';
import './index.less';
import {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {Button, Input, Tag} from 'antd';
export default function EvaluateConfig() {
    const dataSource = [{
        label: '快速',
        value: '111'
    }, {
        label: '准确',
        value: '222'
    }, {
        label: '态度好',
        value: '333'
    }];
    const dataSourceNeg = [{
        label: '答非所问',
        value: '1111'
    }, {
        label: '问题未解决',
        value: '2222'
    }, {
        label: '态度敷衍',
        value: '3333'
    }];
    const [configData, setConfigData] = useState(dataSource);
    const [NconfigData, setNConfigData] = useState(dataSourceNeg);
    let positiveRef = useRef('');
    let negativeRef = useRef('');
    // function onInputConfirm(inputValue) {
    //     const newconfig = {label: inputValue, key: inputValue};
    //     setConfigData([...configData, newconfig]);
    // }
    useEffect(() => {
        console.log('config', configData);
        console.log('config', NconfigData);
    }, [configData, NconfigData]);
    function addPosConfig(positiveRef) {
        const newconfig = {label: positiveRef, key: positiveRef};
        setConfigData([...configData, newconfig]);
        positiveRef = '';
    }
    function addNegConfig(negativeRef) {
        const newconfig = {label: negativeRef, key: negativeRef};
        setNConfigData([...NconfigData, newconfig]);
        negativeRef = '';
    }
    return (
        <div className="config-board-urgent-list">
            <div className='config-pos-neg'>
                <p>好评配置: <Input
                    className='rowline'
                    onChange={e => {
                        positiveRef = e.target.value;
                    }}
                    width={200}
                />
                    <Button className='rowline' type='strong' onClick={() => addPosConfig(positiveRef)}>新增</Button>

                </p>
                <span>好评标签：</span>
                <div>
                    {configData.map(item => (<Tag tipTag="success" key={item.key} closable>{item.label}</Tag>))}
                </div>
            </div>
            <div className='config-pos-neg'>
                <p>差评配置: <Input
                    className='rowline'
                    onChange={e => {
                        negativeRef = e.target.value;
                    }}
                    width={200}
                />
                <Button className='rowline' type='strong' onClick={() => addNegConfig(negativeRef)}>新增</Button>

                </p>
                <span>差评标签：</span>
                <div>
                    {NconfigData.map(item => (<Tag tipTag="warning" key={item.key} closable>{item.label}</Tag>))}
                </div>
            </div>
            <div> <Button type="primary" size='medium'>保存配置</Button></div>
           
        </div>
    );
}
