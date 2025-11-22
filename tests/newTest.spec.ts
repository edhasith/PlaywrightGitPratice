import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/');
    await page.locator('.menu-item').filter({ hasText: 'Practice' }).click();
})




test.only('login positive', async ({ page }) => {
    await page.locator('p a').nth(0).click();
    await page.locator('#username').fill(process.env.USER ?? 'student');
    await page.locator('#password').fill('Password123');
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.url()).toContain('practicetestautomation.com/logged-in-successfully/')
    await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
})

test('login bad username', async ({ page }) => {
    await page.locator('p a').nth(0).click();
    await page.locator('#username').fill(process.env.USER ?? 'vataaaaa');
    await page.locator('#password').fill('Password123');
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator('#error')).toHaveText('Your username is invalid!')
})


test('login fail password', async ({ page }) => {
    await page.locator('p a').nth(0).click();
    await page.locator('#username').fill(process.env.USER ?? 'student');
    await page.locator('#password').fill('asdwasdweadad');
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator('#error')).toHaveText('Your password is invalid!')
})




test('add row', async ({ page }) => {
    await page.locator('p a').nth(1).click();
    console.log(await page.locator('input.input-field').count());
    await page.getByRole('button', { name: "Add" }).click();
    //await page.locator('#confirmation').isVisible();
    await expect(page.locator('#confirmation')).toHaveText('Row 2 was added')

    //await page.getByRole('button',{name:"Edit"}).click();
    await page.locator('input.input-field').nth(1).fill('Tanu');
    await page.getByRole('button', { name: "Save" }).click();
    console.log(await page.locator('input.input-field').count());

})


test('edit the 1st one', async ({ page }) => {
    await page.locator('p a').nth(1).click();
    const value = await page.locator('input.input-field').inputValue();
    await page.getByRole('button', { name: "Edit" }).click();
    await page.locator('input.input-field').fill('Chicken Roll');
    await page.getByRole('button', { name: "Save" }).click();
    const value1 = await page.locator('input.input-field').inputValue();
    await expect(value).not.toMatch(value1)
});

test('remove added tab ', async ({ page }) => {
  await page.locator('p a').nth(1).click();
    console.log(await page.locator('input.input-field').count());
    await page.getByRole('button', { name: "Add" }).click();
    await page.locator('input.input-field').nth(1).fill('Tanu');
    await page.getByRole('button', { name: "Save" }).click();
    await page.getByRole('button',{name:"Remove"}).click();
    await expect(page.locator('#confirmation')).toHaveText('Row 2 was removed');
    expect(await page.locator('input.input-field').nth(1)).toBeHidden();
    
});

test('filter only java', async ({ page }) => {
    await page.locator('p a').nth(2).click();
    await page.locator('label', {hasText:'Java'}).click();
    const langcount = await page.locator('//tr/td[3]').count()
     for(let i = 0 ; i< langcount ; i++){
         if(await page.locator('//tr/td[3]').nth(i).isVisible()){
         console.log(await page.locator('//tr/td[3]').nth(i).textContent())
         await expect(page.locator('//tr/td[3]').nth(i)).toHaveText('Java')}
    }
    


});