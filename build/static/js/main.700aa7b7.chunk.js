(this["webpackJsonpconnect4-react"]=this["webpackJsonpconnect4-react"]||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t.n(r),c=t(11),a=t.n(c),o=(t(21),t(6)),s=t(13),l=t(14),u=t(7),h=t(16),d=t(15),f=(t(22),t(23),t(27)),g=t(28),v=t(29),j=t(30),b=t(0),m="Red",k="Yellow";function w(e){return e.winning?Object(b.jsx)(f.a,{variant:"success",className:"rounded-circle",style:{backgroundColor:"green",maxWidth:"50%",height:"50%"}}):null}function x(e){var n=e.col,t=e.symbol,r=" "===t?"white":t===k?"yellow":"red";return Object(b.jsx)(g.a,{className:"d-flex justify-items-center align-items-center p-0",style:{pointerEvents:"all",backgroundColor:"blue",maxWidth:"100px",height:"100px"},onClick:function(){return e.handleClick(n)},children:Object(b.jsxs)(f.a,{className:"rounded-circle d-flex align-items-center justify-content-center",style:{backgroundColor:r,width:"95%",height:"95%"},children:[" ",Object(b.jsx)(w,{winning:e.winning})," "]})})}function y(e){for(var n=e.winningMoves,t=[],r=0,i=function(i){for(var c=[],a=function(t){var a=n.reduce((function(e,n){return e||n[0]===i&&n[1]===t}),!1);c[t]=Object(b.jsx)(x,{col:t,symbol:e.grid[i][t],handleClick:e.handleClick,winning:a},r++)},o=0;o<7;o++)a(o);t[i]=Object(b.jsx)(v.a,{className:"d-flex justify-content-center flex-nowrap",children:c},i)},c=0;c<6;c++)i(c);return t}var O=function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=n.call(this,e)).state={turn:m,grid:r.makeEmptyArr(),winner:" ",winningMoves:[]},r.handleClick=r.handleClick.bind(Object(u.a)(r)),r.handleReset=r.handleReset.bind(Object(u.a)(r)),r}return Object(l.a)(t,[{key:"makeEmptyArr",value:function(){for(var e=[],n=0;n<6;n++){for(var t=[],r=0;r<7;r++)t[r]=" ";e[n]=t}return e}},{key:"dropPiece",value:function(e,n,t){for(var r=5;r>=0;r--)if(" "===t[r][n])return t[r][n]=e,!0;return!1}},{key:"checkWin",value:function(e){for(var n=0;n<6;n++)for(var t=1,r=e[n][0],i=1;i<7;i++)if(e[n][i]===r?" "!==r&&t++:(r=e[n][i],t=1),t>=4){for(var c=[],a=0;a<4;a++)c[a]=[n,i-a];return console.log("from rows"),console.log(c),[e[n][i],c]}for(var o=0;o<7;o++)for(var s=0,l=e[0][o],u=0;u<6;u++)if(e[u][o]===l?" "!==l&&s++:(l=e[u][o],s=1),s>=4){for(var h=[],d=0;d<4;d++)h[d]=[u-d,o];return console.log("from columns"),console.log(h),[e[u][o],h]}for(var f=0;f<3;f++)for(var g=0;g<4;g++){var v=e[f][g];if(" "!==v){for(var j=[[f,g]],b=1;b<4&&e[f+b][g+b]===v;b++)j[b]=[f+b,g+b];if(j.length>=4)return console.log("from diag1"),console.log(j),[v,j]}}for(var m=3;m<6;m++)for(var k=0;k<4;k++){var w=e[m][k];if(" "!==w){for(var x=[[m,k]],y=1;y<4&&e[m-y][k+y]===w;y++)x[y]=[m-y,k+y];if(x.length>=4)return console.log("from diag2"),console.log(x),[w,x]}}return[" ",[]]}},{key:"handleClick",value:function(e){if(" "===this.state.winner){var n=this.state.turn;if(this.dropPiece(n,e,this.state.grid)){var t=this.checkWin(this.state.grid),r=Object(o.a)(t,2),i=r[0],c=r[1];this.setState({turn:n===m?k:m,grid:this.state.grid,winner:i,winningMoves:c})}console.log(this.state.grid)}}},{key:"handleReset",value:function(){this.setState({turn:m,grid:this.makeEmptyArr(),winner:" ",winningMoves:[]})}},{key:"render",value:function(){var e=this.state.winner,n=" "===e?"It is currently "+this.state.turn+"'s turn":"Game Over! "+this.state.winner+" has won the game!",t=" "===e?100:50;return Object(b.jsxs)("div",{children:[Object(b.jsx)(f.a,{className:"opacity-"+t,children:Object(b.jsx)(y,{grid:this.state.grid,handleClick:this.handleClick,winningMoves:this.state.winningMoves})}),Object(b.jsx)("h1",{children:n}),Object(b.jsx)(j.a,{className:"m-5 lg",onClick:this.handleReset,children:"Reset the Board"})]})}}]),t}(i.a.Component);var p=function(){return Object(b.jsxs)("div",{className:"App",style:{backgroundColor:"azure"},children:[Object(b.jsx)("h1",{children:"Connect 4 with react-bootstrap by Stanley"}),Object(b.jsx)(O,{})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),C()}},[[25,1,2]]]);
//# sourceMappingURL=main.700aa7b7.chunk.js.map