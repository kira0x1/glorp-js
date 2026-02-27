export function setCanvasSize(canvasEl: HTMLCanvasElement) {
  canvasEl.width = canvasEl.parentElement!.clientWidth;
  canvasEl.height = canvasEl.parentElement!.clientHeight;
  canvasEl.getContext("2d")?.scale(2, 2);
}
