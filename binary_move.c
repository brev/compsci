#include <stdio.h>

void main(void) {
	int numero = 721; 							/* 10[1101]0001 */
	int stagetwo = numero >> 4;			/*     10[1101] */
	int stagethree = stagetwo & 15; /*       [1101] */
	printf("%d\n", stagethree);			/* 13 =   1101  */
}
