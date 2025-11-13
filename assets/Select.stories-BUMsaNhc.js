import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u,G as d,R as c,C as o,P as g}from"./Breadcrumb-DMkcfIBW.js";import{r as j}from"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const k={title:"Select",component:u,tags:["autodocs"]},s=[{label:"manager",options:[{label:"Jack",value:1},{label:"Lucy",value:2}]},{label:"engineer",options:[{label:"Chloe",value:3},{label:"Lucas",value:4}]}],r=()=>e.jsx(d,{fluid:!0,children:e.jsxs(c,{children:[e.jsx(o,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Select is a form control for selecting a value from a set of options."})}),e.jsx(o,{xs:12,children:e.jsx(u,{allowClear:!0,open:!0,mode:"multiple",style:{width:"100%"},pageSize:6,defaultValues:["3"],maxTagLength:20,options:[{value:"1",label:"1st Floor"},{value:"2",label:"1st Floor [02. Luxemburg Building]",color:"green"},{value:"3",label:"3rd Floor",color:"orange"},{value:"4",label:"45th Floor [04. Luxemburg Building]",color:"red",disabled:!0},{value:"5",color:"blue",label:"1st Floor [05. Luxemburg Building]"},{value:"6",color:"gray",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor",color:"blue"},{value:"8",label:"2nd Floor [03. Malaga Building]",color:"red"},{value:"9",label:"2nd Floor [04. New York Building]",color:"green"},{value:"10",label:"1st Floor [12. Hong Kong Building]",color:"blue"},{value:"11",label:"3rd Floor [02. Singapur Building]",color:"orange"},{value:"12",label:"2nd Floor [16.  Building]",color:"orange"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear all options",deleteOptionSelectedAriaLabel:"Delete option"})})]})}),a=()=>e.jsx(d,{fluid:!0,children:e.jsxs(c,{children:[e.jsx(o,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"When pageSize prop is not set, the select will not have a button to select all options."})}),e.jsx(o,{xs:12,children:e.jsx(u,{mode:"multiple",style:{width:"100%"},options:[{value:"1",label:"1st Floor",color:"blue"},{value:"2",label:"1st Floor [02. Luxemburg Building]",color:"green"},{value:"3",label:"3rd Floor",color:"orange"},{value:"4",label:"45th Floor [04. Luxemburg Building]",color:"black"},{value:"5",color:"gray",label:"1st Floor [05. Luxemburg Building]"},{value:"6",color:"green",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor",color:"blue"},{value:"8",label:"2nd Floor [03. Malaga Building]",color:"red"},{value:"9",label:"2nd Floor [04. New York Building]",color:"green"},{value:"10",label:"1st Floor [12. Hong Kong Building]",color:"blue"},{value:"11",label:"3rd Floor [02. Singapur Building]",color:"orange"},{value:"12",label:"2nd Floor [16.  Building]",color:"orange"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear option"})})]})}),f=l=>e.jsx(u,{...l}),V=(l,n)=>n.index%2?e.jsx("span",{"data-label":l.label,children:l.label}):e.jsx("strong",{"data-label":l.label,children:l.label}),t=()=>{const[l,n]=j.useState([s[0].options[1].value]);return e.jsx(d,{fluid:!0,children:e.jsxs(c,{children:[e.jsx(o,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Based on the mode prop, the select can be single or multiple."})}),e.jsx(o,{xs:12,children:e.jsx(f,{defaultValues:l,options:s,optionFilterProp:"label",optionRender:V})})]})})},i=()=>{const[l,n]=j.useState(s[0].options[1].value),A=O=>n(O);return e.jsx(d,{fluid:!0,children:e.jsxs(c,{children:[e.jsx(o,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Based on the mode prop, the select can be single or multiple."})}),e.jsx(o,{xs:12,children:e.jsx(f,{allowClear:!0,defaultValues:[l],handleClearAll:()=>{console.log("clear all"),n(null)},onChange:A,options:s})})]})})};var p,b,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Select is a form control for selecting a value from a set of options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select allowClear open mode='multiple' style={{
        width: '100%'
      }} pageSize={6} defaultValues={['3']} maxTagLength={20} options={[{
        value: '1',
        label: '1st Floor'
      }, {
        value: '2',
        label: '1st Floor [02. Luxemburg Building]',
        color: 'green'
      }, {
        value: '3',
        label: '3rd Floor',
        color: 'orange'
      }, {
        value: '4',
        label: '45th Floor [04. Luxemburg Building]',
        color: 'red',
        disabled: true
      }, {
        value: '5',
        color: 'blue',
        label: '1st Floor [05. Luxemburg Building]'
      }, {
        value: '6',
        color: 'gray',
        label: '1st Floor [06. Luxemburg Building]'
      }, {
        value: '7',
        label: '2nd Floor',
        color: 'blue'
      }, {
        value: '8',
        label: '2nd Floor [03. Malaga Building]',
        color: 'red'
      }, {
        value: '9',
        label: '2nd Floor [04. New York Building]',
        color: 'green'
      }, {
        value: '10',
        label: '1st Floor [12. Hong Kong Building]',
        color: 'blue'
      }, {
        value: '11',
        label: '3rd Floor [02. Singapur Building]',
        color: 'orange'
      }, {
        value: '12',
        label: '2nd Floor [16.  Building]',
        color: 'orange'
      }]} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' clearAllOptionsAriaLabel='Clear all options' deleteOptionSelectedAriaLabel='Delete option' />
            </Cell>
        </Row>
    </Grid>`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,x,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>When pageSize prop is not set, the select will not have a button to select all options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select mode='multiple' style={{
        width: '100%'
      }} options={[{
        value: '1',
        label: '1st Floor',
        color: 'blue'
      }, {
        value: '2',
        label: '1st Floor [02. Luxemburg Building]',
        color: 'green'
      }, {
        value: '3',
        label: '3rd Floor',
        color: 'orange'
      }, {
        value: '4',
        label: '45th Floor [04. Luxemburg Building]',
        color: 'black'
      }, {
        value: '5',
        color: 'gray',
        label: '1st Floor [05. Luxemburg Building]'
      }, {
        value: '6',
        color: 'green',
        label: '1st Floor [06. Luxemburg Building]'
      }, {
        value: '7',
        label: '2nd Floor',
        color: 'blue'
      }, {
        value: '8',
        label: '2nd Floor [03. Malaga Building]',
        color: 'red'
      }, {
        value: '9',
        label: '2nd Floor [04. New York Building]',
        color: 'green'
      }, {
        value: '10',
        label: '1st Floor [12. Hong Kong Building]',
        color: 'blue'
      }, {
        value: '11',
        label: '3rd Floor [02. Singapur Building]',
        color: 'orange'
      }, {
        value: '12',
        label: '2nd Floor [16.  Building]',
        color: 'orange'
      }]} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' clearAllOptionsAriaLabel='Clear option' />
            </Cell>
        </Row>
    </Grid>`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,F,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValues] = useState([singleSelectOptions[0].options[1].value]);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent defaultValues={selectedValues} options={singleSelectOptions} optionFilterProp='label' optionRender={optionRender} />
                </Cell>
            </Row>
        </Grid>;
}`,...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var C,L,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValue] = useState<number | null>(singleSelectOptions[0].options[1].value);
  const handleChange = (value: any) => setSelectedValue(value);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent allowClear defaultValues={[selectedValues]} handleClearAll={() => {
          console.log('clear all');
          setSelectedValue(null);
        }} onChange={handleChange} options={singleSelectOptions} />
                </Cell>
            </Row>
        </Grid>;
}`,...(w=(L=i.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const M=["Multiple","SelectNoButton","SingleSelect","SingleSelectAllowClear"];export{r as Multiple,a as SelectNoButton,t as SingleSelect,i as SingleSelectAllowClear,M as __namedExportsOrder,k as default};
