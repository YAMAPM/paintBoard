import css from '../src/css/index.css';
import util from '../src/util/util';
import Board from '../src/board'
import Pen from '../src/pen'
import Tools from '../src/tools';
import Tab from '../src/tab';
import config from '../src/config'
import Stroke from '../src/tool/stroke'
import StatusBar from '../src/statusBar';

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
ctx.strokeStyle = config.color;
ctx.lineWdith = config.weight;
let pen = new Pen(ctx);
let board = new Board(pen, canvas, ctx);
let tools = new Tools(document.querySelector('#tools'), board, canvas, ctx);
let tab = new Tab(document.querySelector('#tab'), board, ctx);
let stroke  = new Stroke(document.querySelector('#tools .eraser'), board);
let statusBar = new StatusBar(document.querySelector('#statusBar'), ctx, board);