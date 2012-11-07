/*
	& = address of, reference
  * = value at address, dereference
*/

#include <stdio.h>

void doit(int *i) {
	*i = 31;
}

void main(void) {
	int age = 69;
  int *age_ptr = &age;
  printf("%d\n", age);			// 69
  printf("%x\n", &age);			// b323a
  printf("%x\n", age_ptr);	// b323a
  printf("%d\n", *age_ptr);	// 69

	doit(&age);
  printf("%d\n", age);	// 31
}

