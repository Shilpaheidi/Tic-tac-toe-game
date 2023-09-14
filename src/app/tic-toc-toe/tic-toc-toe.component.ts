import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-toc-toe',
  templateUrl: './tic-toc-toe.component.html',
  styleUrls: ['./tic-toc-toe.component.scss']
})
export class TicTocToeComponent {
  currentPlayer: 'X' | 'O' = 'X';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  winner: string | null = null;

  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner(row, col);
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner(row: number, col: number): void {
    const symbols = ['X', 'O'];

    for (const symbol of symbols) {
      // Check rows
      if (
        this.board[row][0] === symbol &&
        this.board[row][1] === symbol &&
        this.board[row][2] === symbol
      ) {
        this.winner = symbol;
        return;
      }

      // Check columns
      if (
        this.board[0][col] === symbol &&
        this.board[1][col] === symbol &&
        this.board[2][col] === symbol
      ) {
        this.winner = symbol;
        return;
      }

      // Check diagonals
      if (
        (this.board[0][0] === symbol &&
          this.board[1][1] === symbol &&
          this.board[2][2] === symbol) ||
        (this.board[0][2] === symbol &&
          this.board[1][1] === symbol &&
          this.board[2][0] === symbol)
      ) {
        this.winner = symbol;
        return;
      }
    }
  }

  isBoardFull(): boolean {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (!this.board[row][col]) {
          return false;
        }
      }
    }
    return true;
  }

  resetGame(): void {
    this.currentPlayer = 'X';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.winner = null;
  }
}
