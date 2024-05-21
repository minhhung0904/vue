<template>
  <div>
    <iframe name="step-up-iframe" height="400" width="400"></iframe>
    <form id="step-up-form" target="step-up-iframe" method="post" action="https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp">
      <input type="hidden" name="JWT" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNmI2MDQ3NS1kZDQ1LTQxZmYtYjMxNy0xNTc3Y2ExMGNkYWQiLCJpYXQiOjE3MTYyNjIyMTksImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTcxNjI2NTgxOSwiT3JnVW5pdElkIjoiNjY0MmNiYmFkNWQ3NWIxNjlhNGJmZWE2IiwiUGF5bG9hZCI6eyJBQ1NVcmwiOiJodHRwczovLzBtZXJjaGFudGFjc3N0YWcuY2FyZGluYWxjb21tZXJjZS5jb20vTWVyY2hhbnRBQ1NXZWIvY3JlcS5qc3AiLCJQYXlsb2FkIjoiZXlKdFpYTnpZV2RsVkhsd1pTSTZJa05TWlhFaUxDSnRaWE56WVdkbFZtVnljMmx2YmlJNklqSXVNaTR3SWl3aWRHaHlaV1ZFVTFObGNuWmxjbFJ5WVc1elNVUWlPaUptWXpZd05EUmpNaTA1WmpJMkxUUTFaVFl0WW1FNU5TMWtNR0kzTldGaFpHRTJaak1pTENKaFkzTlVjbUZ1YzBsRUlqb2lOakExT1RoaFltRXROREF4TkMwME5qSTJMVGxrTWpRdFltSm1PV0U0Tm1VMk5qQXlJaXdpWTJoaGJHeGxibWRsVjJsdVpHOTNVMmw2WlNJNklqQXlJbjAiLCJUcmFuc2FjdGlvbklkIjoicGZ5bDNGMzBhWWVnYmFwNEtKTjAifSwiT2JqZWN0aWZ5UGF5bG9hZCI6dHJ1ZSwiUmV0dXJuVXJsIjoiaHR0cDovL2xvY2FsaG9zdDo1MTczL3BheSJ9.dZyxG12MRiRDDJg0PzTIGM3uQvtKsY5NAsrPLKiwUAg" />
      <input type="hidden" name="MD" value="optionally_include_custom_data_that_will_be_returned_as_is" />
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    var stepUpForm = document.querySelector('#step-up-form');
      console.log('stepup')
      if (stepUpForm) { // Kiểm tra form Step-Up tồn tại
        console.log('stepup')
        stepUpForm.submit();
      }
  }
}
</script>