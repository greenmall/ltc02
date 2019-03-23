#include <stdio.h>

#include <ctype.h>



float bmi_calc(float height, float weight) {

return weight/(height * height);
}



int main(void) {

printf("Input your height(m) and weight(kg) in decimals");

float height, weight, bmi;

scanf("%f, %f", &height, %weight);

bmi = bmi_calc(height, weight);

printf(" BMI equals %f", bmi);

if (bmi < 15) {

printf("\nSeverely underweight");

}

	else if (bmi < 18.5) {

printf("\nUnderweight ");

}

	else if (bmi >= 18.5 && bmi < 24.9); {

printf("\nNormal weight");

}

else if (bmi >= 25 && bmi < 29.9) {

printf("\nOverweight");

}

else if (bmi >= 30) {
prinf("\nObesity");

}

}