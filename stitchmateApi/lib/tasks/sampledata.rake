namespace :sampledata do
  desc "TODO"
  task load: :environment do
    Step.delete_all
    Pattern.delete_all

    pattern = Pattern.create!(pattern_name: "Confetti Scarf", pattern_link: "https://www.purlsoho.com/create/2014/12/12/confetti-scarf/", pattern_notes: "Materials

    7 skeins of Purl Soho’s Line Weight, 100% merino.
    US #15 knitting needles, circular or straight.

    For this pattern you will pull one strand from each of the seven skeins of yarn. This means, of course, that you will be knitting with seven strands of yarn at once, which may sound harder than it is! You don’t need to worry about organizing the yarns; it’s okay if they twist and cross. You just need to make sure that you wrap all 7 strands around the needle and that the needle picks up all 7 strands when you pull a stitch through, but since the strands tend to cling to each other, that’s easy!

    Another note… Since this scarf is in stockinette stitch, it will inevitably curl into a tube. It’s quite a wide scarf, so it won’t be a tight tube, but you can definitely expect some curling. We think that’s part of the beauty!
    ")

    # t.integer "step_number"
    # t.text "pattern_step"
    # t.boolean "counter_open"
    # t.integer "row_count"
    # t.integer "rep_count"
    pattern.steps.create!(step_number: 1, pattern_step: "Cast on 44 stitches.", counter_open: false, row_count: 42, rep_count: 12)
    pattern.steps.create!(step_number: 2, pattern_step: "Purl. Knit. Repeat each row until you nearly run out of yarn, ending with Row 1.", counter_open: false, row_count: 42, rep_count: 12)
    pattern.steps.create!(step_number: 3, pattern_step: "Bind off loosely in knit stitch. Weave in the ends and you’re done!", counter_open: false, row_count: 0, rep_count: 0)


    pattern = Pattern.create!(pattern_name: "Woven Cashmere Ombré Scarf", pattern_link: "https://www.purlsoho.com/create/2018/04/13/woven-cashmere-ombre-scarves/", pattern_notes: "Gina would look great in this! Christmas Gift!")

    pattern.steps.create!(step_number: 1, pattern_step: "Set up the warping peg 110 inches from the front of the loom, which is at the front edge of the table.", counter_open: false, row_count: 42, rep_count: 12)
    pattern.steps.create!(step_number: 2, pattern_step: "With a 10-dent reed in place and using Yarn A (see Notes), begin by pulling the first loop of yarn through the 3rd slat from the right end of the reed.", counter_open: false, row_count: 42, rep_count: 12)
    pattern.steps.create!(step_number: 3, pattern_step: "Working from right to left, pull Yarn A through an additional 8 slats. You will have threaded 9 slats, giving you 18 warp ends.", counter_open: false, row_count: 42, rep_count: 12)
    pattern.steps.create!(step_number: 4, pattern_step: "Cut Yarn A and tie it to the back apron rod", counter_open: false, row_count: 42, rep_count: 12)
  end

end
