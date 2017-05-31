// globals
var data_array = [];
var data_statement1;
var unid;
var repetition_count = 0;
var conditions;
var timer_ms1 = 60000;
var timer_ms2 = 100;
var min_char = 50;
var min_char_heading = 2;
var min_char_link = 20;

// add listener to input event
function add_input_listener(classname) {
  classname.each(function() {
    if ($(this).is(":visible")) {
      $(this).on("input", function() {
        $(this).prop('moved', true);
      });
      // console.log("added listener to " + this.id);
    }
  });
}

// task flow
$(document).ready(function() {
  var text = introduction;
  $('body').prepend('<div id="intro1" class="main_instructions_">' + text + '</div>');
  $("#intro1").show();
  $("#back").hide();
  $("#next").attr('onclick', 'to_informed_consent()');
  setTimeout(function() {
    init_data();
    getIP();
    get_unid();
  }, 100);
});

function to_informed_consent() {
  conditions = get_cond();
  $("#back").hide();
  var text = ic;
  $('body').prepend('<div id="informed_consent" class="main_instructions_">' + text + '</div>');
  simple_transition_2($(".main_instructions_"), $("#informed_consent"));
  $("#next").attr('onclick', 'to_main_instructions1()');
}

function to_main_instructions1() {
  var text = general_instructions1;
  $("#back").show();
  $('body').prepend('<div id="main_instructions1" class="main_instructions_">' + text + '</div>');
  simple_transition_2($(".main_instructions_"), $("#main_instructions1"));
  $("#next").attr('onclick', 'to_main_instructions2()');
  $("#back").attr('onclick', 'to_informed_consent()');
}

function to_main_instructions2() {
  unblock_copy_pasting();
  var text;
  if (conditions.valence === 0) {
    text = instructions_pos1;
  } else if (conditions.valence == 1) {
    text = instructions_neg1;
  }
  var input_link = '<textarea type="text" rows="3" cols="80" class="text_input1_link" id="link_input" placeholder="COPY & PASTE THE LINK HERE"></textarea>';
  $('body').prepend('<div id="main_instructions2" class="main_instructions_">' + text + provide_link + input_link + '</div>');
  simple_transition_2($(".main_instructions_"), $("#main_instructions2"));
  // $("#next").attr('onclick', 'to_pre_input_reminder_1()');
  // $("#back").attr('onclick', 'to_main_instructions1()');
  $("#next").attr('onclick', 'to_statement_input1()');
}

// function to_pre_input_reminder_1() {
//     if (check_text_link($("#link_input"), min_char_link) === true) {
//         block_copy_pasting();
//         var text;
//         if (conditions.counterbal === 0) {
//             text = pre_input_pos;
//             debugger
//         } else if (conditions.counterbal == 1) {
//             text = pre_input_neg;
//         }
//         $('body').prepend('<div id="pre_input_instructions1" class="main_instructions_">' + text + '</div>');
//         simple_transition_2($(".main_instructions_"), $("#pre_input_instructions1"));
//         $("#next").attr('onclick', 'to_statement_input1()');
//     }
// }

function to_statement_input1() {
  if (check_text_link($("#link_input"), min_char_link) === true) {
    block_copy_pasting();
    var text;
    if (conditions.valence === 0) {
      if (conditions.counterbal === 0) {
        text = instructions_inputfield_pos_truthful;
      } else if (conditions.counterbal == 1) {
        text = instructions_inputfield_neg_deceptive;
      }
    } else if (conditions.valence == 1) {
      if (conditions.counterbal === 0) {
        text = instructions_inputfield_pos_deceptive;
      } else if (conditions.counterbal == 1) {
        text = instructions_inputfield_neg_truthful;
      }
    }
    var input_field_heading = '<textarea type="text" rows="1" cols="80" class="text_input1_heading" id="statement1_heading" placeholder="TYPE THE HEADING HERE"></textarea>';
    var input_field_full = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement1" placeholder="TYPE YOUR REVIEW HERE"></textarea>';
    $('body').prepend('<div id="statement_input1" class="main_instructions_">' + text + input_field_heading + input_field_full + '</div>');
    start_timer();
    record_deletes($("#statement1"));
    record_gaps($("#statement1"));
    simple_transition_2($(".main_instructions_"), $("#statement_input1"));
    $("#next").attr('onclick', 'to_pre_input_reminder_2()');
  }
}

// function to_main_instructions3() {
//     if (validate_text($("#statement1"), min_char, 'both', conditions.cond_lang) === true) {
//         recorded_deletes = deletions_arr.length;
//         statement1_main = collect_statement($("#statement1"));
//
//         var text;
//         if (conditions.counterbal == 1) {
//             text = pre_input_pos;
//         } else if (conditions.counterbal === 0) {
//             text = pre_input_neg;
//         }
//
//         $('body').prepend('<div id="main_instructions2" class="main_instructions_">' + text + '</div>');
//         simple_transition_2($(".main_instructions_"), $("#main_instructions2"));
//         $("#next").attr('onclick', 'to_pre_input_reminder_2()');
//         $("#back").attr('onclick', 'to_main_instructions1()').hide();
//     }
// }

function to_pre_input_reminder_2() {
  if (check_text_heading($("#statement1_heading"), min_char_heading) === true) {
    if (validate_text($("#statement1"), min_char, 'both', conditions.cond_lang) === true) {
      recorded_deletes = deletions_arr.length;
      statement1_main = collect_statement($("#statement1_heading"), $("#statement1"));
      var text = transition_to_next;
      // if (conditions.counterbal == 1) {
      //     text = pre_input_pos;
      // } else if (conditions.counterbal === 0) {
      //     text = pre_input_neg;
      // }
      $('body').prepend('<div id="pre_input_instructions2" class="main_instructions_">' + text + '</div>');
      simple_transition_2($(".main_instructions_"), $("#pre_input_instructions2"));
      $("#next").attr('onclick', 'to_statement_input2()');
    }
  }
}

function to_statement_input2() {
  var text;
  if (conditions.valence === 0) {
    if (conditions.counterbal == 1) {
      text = instructions_inputfield_pos_truthful;
    } else if (conditions.counterbal === 0) {
      text = instructions_inputfield_neg_deceptive;
    }
  } else if (conditions.valence == 1) {
    if (conditions.counterbal == 1) {
      text = instructions_inputfield_pos_deceptive;
    } else if (conditions.counterbal === 0) {
      text = instructions_inputfield_neg_truthful;
    }
  }
  var input_field_heading = '<textarea type="text" rows="1" cols="80" class="text_input1_heading" id="statement2_heading" placeholder="TYPE THE HEADING HERE"></textarea>';
  var input_field_full = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement2" placeholder="TYPE YOUR REVIEW HERE"></textarea>';
  $('body').prepend('<div id="statement_input2" class="main_instructions_">' + text + input_field_heading + input_field_full + '</div>');
  start_timer();
  record_deletes($("#statement2"));
  record_gaps($("#statement2"));
  simple_transition_2($(".main_instructions_"), $("#statement_input2"));
  $("#next").attr('onclick', 'to_manipulation_check()');
}

function to_manipulation_check() {
  if (check_text_heading($("#statement2_heading"), min_char_heading) === true) {
    if (validate_text($("#statement2"), min_char, 'both', conditions.cond_lang) === true) {
      recorded_deletes = deletions_arr.length;
      statement2_main = collect_statement($("#statement2_heading"), $("#statement2"));
      var slider;
      var text = manipulation_check_en;
      var slider_a = '<div id="manip_check" class="table_row_div">' +
        '<span class="manipulation_check_span" style="left: 50%;">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">How were you instructed to write your first review in this task?</span> ' +
        '<input type="range" class="slider_io_slider select_menu" id="manipulation_check1_val" value="0" min="-1" max="1" step="1" oninput="set_manipulation_check1_slider_value()">' +
        '<output class="slider_io_output" id="manipulation_check1_output">move the slider</output>' +
        '<div class="slider_io_output_labels stretch">(positive) -  -  -  (negative)</div> ' +
        '</div>' +
        '</span>' +
        '</div>';
      var slider_b = '<div id="manip_check" class="table_row_div">' +
        '<span class="manipulation_check_span" style="left: 50%;">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">How motivated were you to write convincing reviews?</span> ' +
        '<input type="range" class="slider_io_slider select_menu" id="manipulation_check2_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check2_slider_value()">' +
        '<output class="slider_io_output" id="manipulation_check2_output">move the slider</output>' +
        '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
        '</div>' +
        '</span>' +
        '</div>';
      var slider_c = '<div id="manip_check" class="table_row_div">' +
        '<span class="manipulation_check_span" style="left: 50%;">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">Before you buy a product on Amazon, do you read the reviews?</span> ' +
        '<input type="range" class="slider_io_slider select_menu" id="manipulation_check3_val" value="0" min="-1" max="1" step="1" oninput="set_manipulation_check3_slider_value()">' +
        '<output class="slider_io_output" id="manipulation_check3_output">move the slider</output>' +
        '<div class="slider_io_output_labels stretch">(no) - - - - - - -  (yes)</div> ' +
        '</div>' +
        '</span>' +
        '</div>';
      var slider_d = '<div id="manip_check" class="table_row_div">' +
        '<span class="manipulation_check_span" style="left: 50%;">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">How strongly are you influenced by reviews before you buy a product on Amazon?</span> ' +
        '<input type="range" class="slider_io_slider select_menu" id="manipulation_check4_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check4_slider_value()">' +
        '<output class="slider_io_output" id="manipulation_check4_output">move the slider</output>' +
        '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
        '</div>' +
        '</span>' +
        '</div>';
      var slider_e = '<div id="manip_check" class="table_row_div">' +
        '<span class="manipulation_check_span" style="left: 50%;">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">How long ago did you buy the product you provided the link for?</span> ' +
        '<select id="time_product" class="slider_io_slider select_menu">' +
        '<option value="">- Choose one -</option>' +
        '<option value="1">1 month ago</option>' +
        '<option value="2">2 months ago</option>' +
        '<option value="3">3 months ago</option>' +
        '<option value="4">4 months ago</option>' +
        '<option value="5">5 months ago</option>' +
        '<option value="6">6 months ago</option>' +
        '<option value="7">more than 6 months ago</option>' +
        '</select>' +
        '</div>' +
        '</span>' +
        '</div>';
      $('body').prepend('<div id="manipulation_check" class="main_instructions_">' + text + '</div>');
      $("#manipulation_check").append(slider_a);
      $("#manipulation_check").append(slider_b);
      $("#manipulation_check").append(slider_c);
      $("#manipulation_check").append(slider_d);
      $("#manipulation_check").append(slider_e);
      add_input_listener($(".slider_io_slider"));
      activate_stretch();
      simple_transition_2($(".main_instructions_"), $("#manipulation_check"));
      $("#next").attr('onclick', 'to_demographics1()');
    }
  }
}


function to_demographics1() {
  if (check_slider_with_listener($(".slider_io_slider")) === true) {
    if (check_fields($(".select_menu")) === true) {
      // check select menu
      var transition_text = transition_en;
      simple_transition($("#manipulation_check"), $("#demographics1_en"));
      $("#demographics1_nl").hide();
      $("<h2></h2>").text(transition_text).appendTo($('body'));
      $("#next").attr('onclick', 'to_demographics2()');
      $("#back").attr('onclick', 'to_main_instructions2()').hide();
      define_keys($("#age_sel_nl"), 'number', 2);
      define_keys($("#age_sel_en"), 'number', 2);
    }
  }
}

function to_demographics2() {
  if (check_fields($(".select_menu")) === true) {
    $("h2").remove();
    if (has_second_language() === false) {
      // $("#lang2").css('display', 'none');
      $("#lang2_en").hide();
      $("#lang2_nl").hide();
    }
    simple_transition($("#demographics1_en"), $("#demographics2_en"));
    $("#demographics2_nl").hide();
    $("#next").attr('onclick', 'to_outro()');
  }
}

function to_outro() {
  if (check_fields($(".select_menu")) === true) {
    unblock_copy_pasting();
    var outro_dom = outro_en;
    var credits_dom = credits;
    simple_transition($("#demographics2_en"), $("#outro"));
    $('body').prepend('<div id="outro" class="main_instructions_">' + outro_dom + '</div>' + credits_dom);
    $("#partcode").text(unid);
    $("#next").show();
    $("#next").text('SEND');
    $("#next").attr('onclick', 'send_to_server()');
  }
}

function get_data() {
  var bilingual_bool = $("#bilingual_sel_en").val();
  var age = $("#age_sel_en").val();
  var gender = $("#gender_sel_en").val();
  var origin = $("#origin_sel_en").val();
  var education = $("#education_sel_en").val();
  var lang1 = $("#lang1_sel_en").val();
  var lang2 = $("#lang2_sel_en").val();
  data.ip = clientip;
  data.browsername = $.browser.name;
  data.browserversion = $.browser.version;
  data.ts_time = moment().format('LTS');
  data.ts_date = moment().format('l');
  data.unid = unid;
  data.unidin = $("#unidin").val();
  data.crowdf = $("#crowdf").val();
  data.gender = gender;
  data.age = age;
  data.education = education;
  data.origin = origin;
  data.bilingual_sel = bilingual_bool;
  data.lang1_sel = lang1;
  data.lang2_sel = lang2;
  data.valence = conditions.valence;
  data.counterbal = conditions.counterbal;

  data.manipulation_check1 = $("#manipulation_check1_val").val();
  data.manipulation_check2 = $("#manipulation_check2_val").val();
  data.manipulation_check3 = $("#manipulation_check3_val").val();
  data.manipulation_check4 = $("#manipulation_check4_val").val();
  data.manipulation_check5 = $("#time_product").val();

  data.linkamazon = $("#link_input").val();

  data.heading_prompt_n = heading_prompt;
  data.link_prompt_n = link_prompt;
  data.review_length_prompt_n = review_length_prompt;

  data.statement1_content = statement1_main.content_full;
  data.statement1_heading = statement1_main.content_heading;
  data.statement1_defoucus = statement1_main.pagefocus.defocus;
  data.statement1_refoucus = statement1_main.pagefocus.refocus;
  data.statement1_defocusduration = statement1_main.pagefocus.durationsum;
  data.statement1_length_heading = statement1_main.length_heading;
  data.statement1_length_full = statement1_main.length_full;
  data.statement1_elapsed = statement1_main.elapsed;
  data.statement1_deletes = statement1_main.deletes;
  data.statement1_deletes = statement1_main.deletes;
  data.statement1_gaps_100 = statement1_main.gaps_100;
  data.statement1_gaps_200 = statement1_main.gaps_200;
  data.statement1_gaps_300 = statement1_main.gaps_300;
  data.statement1_gaps_400 = statement1_main.gaps_400;
  data.statement1_gaps_500 = statement1_main.gaps_500;
  data.statement1_gap_init = statement1_main.gap_init;
  data.statement1_gaps_n = statement1_main.gaps_n;

  data.statement2_content = statement2_main.content_full;
  data.statement2_heading = statement2_main.content_heading;
  data.statement2_defoucus = statement2_main.pagefocus.defocus;
  data.statement2_refoucus = statement2_main.pagefocus.refocus;
  data.statement2_defocusduration = statement2_main.pagefocus.durationsum;
  data.statement2_length_heading = statement2_main.length_heading;
  data.statement2_length_full = statement2_main.length_full;
  data.statement2_elapsed = statement2_main.elapsed;
  data.statement2_deletes = statement2_main.deletes;
  data.statement2_deletes = statement2_main.deletes;
  data.statement2_gaps_100 = statement2_main.gaps_100;
  data.statement2_gaps_200 = statement2_main.gaps_200;
  data.statement2_gaps_300 = statement2_main.gaps_300;
  data.statement2_gaps_400 = statement2_main.gaps_400;
  data.statement2_gaps_500 = statement2_main.gaps_500;
  data.statement2_gap_init = statement2_main.gap_init;
  data.statement2_gaps_n = statement2_main.gaps_n;

  // console.log(data);
}
