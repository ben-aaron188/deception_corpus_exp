var introduction = '<center>Welcome to the study "Deceptive opinion spam"!</center></br></br></br>Please do this task in one of the following web-browsers: Google Chrome, Firefox, or Safari.';

var ic = ' <p><strong>Informed consent &amp; Information letter </strong></p> <p>Before you participate in this study, it is important to know why the research is being done and what it means for you. Please read this information carefully and take your time to decide whether or not to participate.&nbsp;</p> <ul> <li>This research was initiated by Dr. Bruno Verschuere of the program group Clinical Psychology, Department of Psychology, FMG, University of Amsterdam.</li> <li>The whole study will take approximately 5-7 minutes</li> <li>Your participation will only be valid if you explicitly follow the instructions the researchers will give you about the activities you have to do.</li> </ul> <p>If you are to refrain from participating in this experiment, this decision in no way will affect you. If during the investigation, you decide to discontinue participation, it will have no consequences. You are free to discontinue without giving any reason. If you discontinue your participation, or afterwards, withdraw your consent within 24 hours, then your data will be removed from our files and destroyed. We appreciate your participation in this study very much. There are no known disadvantages to participating in this study. Because this study poses no risk to your health or safety along with it, there is no special insurance.</p> <p>IMPORTANT</p> <p>All your data will be treated confidentially. Anonymized data can be accessed by responsible persons of the Psychology Department. The informed consent form you sign gives these people permission to view the data. The data obtained during the investigation is stored in the computer and will remain until 5 years after completion of the investigation. If the results of this study are reported in journals or at scientific meetings, you will never be mentioned by name.</p> <p>If you want further information about this study, please contact the researcher Bruno Verschuere (phone: +31205256799, email: b.j.verschuere@uva.nl; University of Amsterdam, Roeterseilandcampus building G, room 1.31).</p> <p>For any complaints about this study, please contact the member of the Ethics Committee of the Department of Psychology of the University of Amsterdam, Dr. A. van Emmerik (telephone: +20 525 8604; email: a.a.p.vanemmerik@uva.nl; University of Amsterdam, Roeterseilandcampus building G, room 1.41).</p><p>You agree to the terms and conditions by clicking on the button.</p>';

// transition to demographics1
var transition_en = ' <p>The first part of the experiment is finished. Please fill in your details below.</p>';

// manipulations
var general_instructions1 = '<p>In this experiment, you are asked to write two product reviews.</p> <p>In the prolific prescreening, you indicated that you recently purchased an electronic device online. You rated that product as either very bad (1 star) or very good (5 stars).</br> The reviews you will be writing are about that product. One of the reviews will be truthful and corresponds to your initial rating. For the other review, we ask you to imagine that you gave the product a rating which is opposite of your truthful rating (5 stars instead of 1 or vice versa).</br> You will be asked to provide a link to the electronic device you purchased and to answer some general questions about reviews.</p> <p>Please follow the instructions carefully!</p>';

var instructions_pos1 = '<p>Based on your prescreening on Prolific you indicated that you recently purchased an electronic device online and rated that product with 5 stars (i.e. very good).</p>';
var instructions_neg1 = '<p>Based on your prescreening on Prolific you indicated that you recently purchased an electronic device online and rated that product with 1 star (i.e. very bad).</p>';

var provide_link = 'Please provide a web-link to the product you wrote your reviews about in the following field. After you have looked up this product on Amazon, please paste the link here.';

var transition_to_next = "You will now be asked to write a second but different review about the same product. Please follow the instructions on the next screen";


var instructions_inputfield_pos_truthful = '<p>Please write an <u>honest, positive review</u> about your purchased product according to your 5 star rating.</p> <p>The review will have to be at least 75 words and you will not be able to copy and paste text into the answer box.</p>';
var instructions_inputfield_neg_truthful = '<p>Please write an <u>honest, negative review</u> about your purchased product according to your 1 star rating.</p> <p>The review will have to be at least 75 words and you will not be able to copy and paste text into the answer box.</p>';
var instructions_inputfield_pos_deceptive = '<p>Please write a <u>fake, positive review</u> about your purchased product. This review should be a 5-star (i.e. a very positive) review of the product.</p> <p>The review will have to be at least 75 words and you will not be able to copy and paste text into the answer box.</p>';
var instructions_inputfield_neg_deceptive = '<p>Please write a <u>fake, negative review</u> about your purchased product. This review should be a 1-star (i.e. a very negative) review of the product.</p> <p>The review will have to be at least 75 words and you will not be able to copy and paste text into the answer box.</p>';


// manipulation check
var manipulation_check_en = 'Thank you for providing your statement. For the validity of this research, it is important for us to know to whether you correctly understood your task, to what extent you wrote a truthful statement or not, and how motivated you were. Please answer the questions below honestly.</br><i>Scroll down to see all sliders.</i>';

// outro
var debriefing_en = 'In this study you were asked to write two reviews. One truthful and one deceptive review. In our study, we are going to investigate whether these reviews can be differentiated based on the writing style.';

var outro_en = 'Your participation code: <span id=partcode style="color: red">9871NO</span></br></br>' +
	'<span id="debr">' + debriefing_en + '</span></br></br>' +
	'In order to validate your participation, it is necessary that you provide your Prolific ID below in the left hand-field and confirm your participation code on the right. ' +
	// 'The allocation of extra 0.50GBP for believable statements will happen directly after we finished data collection. ' +
	'If you have any questions about this study, please contact us via <a href="mailto:verbaldeceptiondetection@gmail.com?Subject=Online%20Experiment" target="_top">verbaldeceptiondetection@gmail.com</a>' +
	'<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="24" style="text-align: center; left: 25%; top: 85%; height: 10%; width: 25%;" placeholder="YOUR PROLIFIC ID">' +
	'<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="8" size="16" style="text-align: center; left: 75%; top: 85%; height: 10%; width: 25%; color: red" placeholder="YOUR PARTICIPATION CODE">';

// credits
var credits = '<div id="credits">' +
	'University of Amsterdam // Bennett Kleinberg: <a href="mailto:b.a.r.kleinberg@uva.nl?Subject=Online%20Experiment" target="_top">b.a.r.kleinberg@uva.nl</a>' +
	'</div>';
